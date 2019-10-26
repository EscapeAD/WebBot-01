const minion = require('./server/server');
const dotenv = require('dotenv');
const logger = require('./service/logger')
const result = dotenv.config();
const database = require('./database/database');

console.log(`[INFO] Checking Enviroment`)
if (result.error) {
    throw result.error
}
console.log(`[INFO] Loading Database`)
database();
console.log(`[INFO] Server Bootup`)
minion();
console.log(`[INFO] Minion Ready`)
logger.info(`[INFO] Server Startup`)
