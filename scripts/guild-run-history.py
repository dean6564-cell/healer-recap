"""Deduplicate public five-member guild parties; retain discoveries within a season."""
import hashlib
import json
import unicodedata

def identity(name, realm):
    return '|'.join(''.join(c for c in unicodedata.normalize('NFKC', str(s)).lower() if c.isalnum()) for s in (name, realm))

def party_members(run):
    party = []
    for member in run.get('members', []):
        char = member.get('character', {})
        realm = char.get('realm', {}).get('slug')
        name = char.get('name')
        if not name or not realm:
            continue
        spec = member.get('specialization', {})
        party.append({'name':name, 'realm':realm, 'spec':spec.get('name')})
    return party

def full_guild_history(previous, members, season, now):
    roster = {identity(m['name'], m['realm']) for m in members}
    history = {r['id']:r for r in previous.get('fullGuildRuns', [])} if previous.get('seasonId') == season else {}
    for member in members:
        if member.get('status') != 'current':
            continue
        for run in member.get('bestRuns', []):
            party = run.get('members', [])
            keys = sorted({identity(p.get('name',''), p.get('realm','')) for p in party})
            if len(party) != 5 or len(keys) != 5 or not all(k in roster for k in keys):
                continue
            if not all(isinstance(run.get(k), (int,float)) and run[k] > 0 for k in ('completedAt','durationMs','level','dungeonId')):
                continue
            signature = [season, run['dungeonId'], run['level'], run['completedAt'], run['durationMs'], keys]
            key = hashlib.sha256(json.dumps(signature, ensure_ascii=False).encode()).hexdigest()[:24]
            before = history.get(key, {})
            history[key] = dict(run, id=key, firstSeenAt=before.get('firstSeenAt',now), lastSeenAt=now, guildVerifiedAt=now, source='Blizzard')
    return sorted(history.values(), key=lambda r:r['completedAt'], reverse=True)
