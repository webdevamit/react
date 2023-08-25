const os = require('os');
const fs = require('fs');
const env = `HOST = ${os.hostname()}.fm.rbsgrp.net\nPORT = 8081`;

fs.writeFileSync('./.env', env, 'utf-8');

let rawContent = fs.readFileSync('./.vscode/launch.json', 'utf-8');
rawContent = rawContent.split('${HOSTNAME}').join(os.hostname());
fs.writeFileSync('./.vscode/launch.json', rawContent, 'utf-8');
