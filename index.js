var exec = require('child_process').exec;
exec('mongod');

require('ts-node/register');
require('./src/main')