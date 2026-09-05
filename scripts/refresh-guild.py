"""Publish public guild profiles only; credentials and tokens stay in memory."""
import base64
import importlib.util
import concurrent.futures
import datetime as dt
import json
import os
from pathlib import Path
import time
import urllib.error
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'data/guild.json'
API = 'https://eu.api.blizzard.com'
GUILD = {'name': 'Cause And Effect', 'realm': 'Shattered Halls', 'region': 'EU'}
CLASSES = {1:'Warrior',2:'Paladin',3:'Hunter',4:'Rogue',5:'Priest',6:'Death Knight',7:'Shaman',8:'Mage',9:'Warlock',10:'Monk',11:'Druid',12:'Demon Hunter',13:'Evoker'}
TANKS = {66,73,250,268,581,104}
HEALERS = {65,256,257,264,270,105,1468}

def request(url, headers=None, data=None):
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, data=data, headers=headers or {})
            with urllib.request.urlopen(req, timeout=25) as response:
                return json.load(response)
        except urllib.error.HTTPError as exc:
            if exc.code not in (429,500,502,503,504) or attempt == 2:
                raise RuntimeError('HTTP ' + str(exc.code)) from None
        except (OSError, ValueError):
            if attempt == 2:
                raise RuntimeError('Network or response error') from None
        time.sleep(2 ** (attempt + 1))

_spec = importlib.util.spec_from_file_location('guild_run_history', Path(__file__).with_name('guild-run-history.py'))
_history = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_history)

def main():
    client = os.environ.get('BLIZZARD_CLIENT_ID', '')
    secret = os.environ.get('BLIZZARD_CLIENT_SECRET', '')
    if not client or not secret:
        raise RuntimeError('Set BLIZZARD_CLIENT_ID and BLIZZARD_CLIENT_SECRET in Actions secrets.')
    auth = base64.b64encode((client + ':' + secret).encode()).decode()
    token = request('https://oauth.battle.net/token', {'Authorization':'Basic '+auth, 'Content-Type':'application/x-www-form-urlencoded'}, b'grant_type=client_credentials')['access_token']
    def api(path, namespace='profile-eu'):
        return request(API + path + '?' + urllib.parse.urlencode({'namespace':namespace,'locale':'en_GB'}), {'Authorization':'Bearer '+token})
    roster = api('/data/wow/guild/shattered-halls/cause-and-effect/roster')
    season = api('/data/wow/mythic-keystone/season/index', 'dynamic-eu')['current_season']['id']
    members = roster.get('members', [])
    if not members:
        raise RuntimeError('Empty roster returned; existing snapshot preserved.')
    now = dt.datetime.now(dt.timezone.utc).isoformat()
    previous = json.loads(OUT.read_text(encoding='utf-8')) if OUT.exists() else {}
    old = {m['key']:m for m in previous.get('members', [])} if previous.get('seasonId') == season else {}
    max_level = max(m['character'].get('level',0) for m in members)
    def collect(entry):
        char = entry['character']
        realm = char['realm']['slug']
        name = char['name']
        key = realm + '/' + name.lower()
        record = {'key':key,'name':name,'realm':realm,'level':char.get('level'), 'class':CLASSES.get(char.get('playable_class',{}).get('id'),'Unknown'), 'role':'Unknown','spec':None,'score':None,'bestRuns':[], 'status':'below_max_level', 'updatedAt':now}
        if char.get('level',0) < max_level:
            return record
        path = '/profile/wow/character/' + urllib.parse.quote(realm) + '/' + urllib.parse.quote(name.lower())
        avatar = old.get(key, {}).get('avatar')
        avatar_updated = old.get(key, {}).get('avatarUpdatedAt')
        try:
            media = api(path + '/character-media')
            asset = next((a.get('value') for a in media.get('assets', []) if a.get('key') == 'avatar'), None)
            if asset and urllib.parse.urlparse(asset).scheme == 'https':
                avatar, avatar_updated = asset, now
        except RuntimeError:
            pass
        try:
            profile = api(path)
            spec = profile.get('active_spec', {})
            record['spec'] = spec.get('name')
            record['role'] = 'Tank' if spec.get('id') in TANKS else 'Healer' if spec.get('id') in HEALERS else 'DPS' if spec.get('id') else 'Unknown'
        except RuntimeError:
            pass
        try:
            data = api(path + '/mythic-keystone-profile/season/' + str(season))
            if data.get('season',{}).get('id',season) != season:
                raise RuntimeError('Season mismatch')
            score = data.get('mythic_rating',{}).get('rating')
            record['score'] = round(score,1) if isinstance(score,(int,float)) else None
            for run in data.get('best_runs',[]):
                record['bestRuns'].append({'dungeon':run.get('dungeon',{}).get('name','Unknown'), 'dungeonId':run.get('dungeon',{}).get('id'), 'level':run.get('keystone_level'), 'durationMs':run.get('duration'), 'timed':run.get('is_completed_within_time'), 'completedAt':run.get('completed_timestamp'), 'rating':run.get('mythic_rating',{}).get('rating'), 'members':_history.party_members(run)})
            record['status'] = 'current'
            before = old.get(key,{}).get('score')
            record['change'] = round(record['score']-before,1) if record['score'] is not None and before is not None else None
        except RuntimeError as exc:
            if key in old and old[key].get('score') is not None:
                record = dict(old[key], status='stale', error=str(exc), change=None)
            else:
                record.update(status='unavailable',error=str(exc))
        record.update(avatar=avatar, avatarUpdatedAt=avatar_updated)
        return record
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        result = list(pool.map(collect,members))
    attempted = [m for m in result if m['status'] != 'below_max_level']
    successful = sum(m['status']=='current' for m in attempted)
    if attempted and not successful:
        raise RuntimeError('No current character M+ profiles were accessible; existing snapshot preserved.')
    result.sort(key=lambda m: (-(m['score'] if m['score'] is not None else -1),m['name'].lower()))
    snapshot = {'guild':GUILD,'seasonId':season,'updatedAt':now,'maxLevel':max_level,'members':result,'coverage':{'roster':len(result),'attempted':len(attempted),'current':successful},'source':'Blizzard World of Warcraft APIs'}
    snapshot['fullGuildRuns'] = _history.full_guild_history(previous, result, season, now)
    snapshot['partyDataCollectedAt'] = now
    OUT.parent.mkdir(parents=True, exist_ok=True)
    temporary = OUT.with_suffix('.tmp')
    temporary.write_text(json.dumps(snapshot,ensure_ascii=False,indent=2),encoding='utf-8')
    temporary.replace(OUT)
    print('Guild snapshot saved: %d members; %d/%d current M+ profiles; season %s.' % (len(result),successful,len(attempted),season))

if __name__ == '__main__':
    try:
        main()
    except Exception as exc:
        # Only our sanitized errors are logged, never request headers or token responses.
        print('Refresh failed: ' + (str(exc) if isinstance(exc,RuntimeError) else type(exc).__name__))
        raise SystemExit(1)


