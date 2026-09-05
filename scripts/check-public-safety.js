const fs=require('fs');
const {execFileSync}=require('child_process');

const files=execFileSync('git',['ls-files','-z'],{encoding:'utf8'}).split('\0').filter(Boolean);
const forbiddenPaths=[
 /(^|\/)(?:private|secrets|uploads|raw-logs)(?:\/|$)/i,
 /(^|\/)\.env(?:\.|$)/i,
 /\.(?:log|combatlog|pem|key)$/i,
 /(^|\/)(?:credentials|service-account)[^/]*\.json$/i
];
const forbiddenContent=[
 ['GitHub token',/github_pat_[A-Za-z0-9_]{20,}|ghp_[A-Za-z0-9]{20,}/],
 ['private key',/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
 ['embedded credential',/(?:client_secret|api_key|access_token|password)\s*[:=]\s*["'][^$<{\s][^"']{7,}["']/i],
 ['internal combat-log method',new RegExp(['Combat-log v\\d+','zero-based\\).*spell/range','UNIT_DIED with '+'unconscious','Spirit of Redemption[^\\n]{0,80}within \\d+ seconds'].join('|'),'i')]
];
const findings=[];
for(const file of files){
 const normalized=file.replace(/\\/g,'/');
 if(forbiddenPaths.some(pattern=>pattern.test(normalized)))findings.push(`${file}: private file type or directory is tracked`);
 const buffer=fs.readFileSync(file);
 if(buffer.includes(0))continue;
 const text=buffer.toString('utf8');
 for(const [label,pattern] of forbiddenContent)if(pattern.test(text))findings.push(`${file}: ${label}`);
}
if(findings.length){
 console.error('Public safety check failed:\n'+findings.map(item=>`- ${item}`).join('\n'));
 process.exit(1);
}
console.log(`Public safety check passed (${files.length} tracked files checked).`);
