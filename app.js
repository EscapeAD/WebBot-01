const minion = require('./server/server');
const dotenv = require('dotenv');
const result = dotenv.config();
console.log('checking...')
if (result.error) {
    throw result.error
}
console.log(result.parsed)
console.log('minion ready')
minion();