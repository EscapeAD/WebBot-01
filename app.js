const minion = require('./server/server');
const dotenv = require('dotenv');
const logger = require('./service/logger')
const result = dotenv.config();
console.log('checking...')
if (result.error) {
    throw result.error
}
console.log(result.parsed)
console.log('minion ready')
logger.info(`server startup`)
minion();