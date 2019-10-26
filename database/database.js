const mongoose = require('mongoose');
const URI = `mongodb://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBURI}/${process.env.DBNAME}`
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: 1000000,
    reconnectInterval: 3000
}

mongoose.connection.on('connected', () => {
    console.log('[INFO] Connection Established')
})

mongoose.connection.on('reconnected', () => {
    console.log('[INFO] Connection Reestablished')
})

mongoose.connection.on('disconnected', () => {
    console.log('[INFO] Connection Disconnected')
})

mongoose.connection.on('close', () => {
    console.log('[INFO] Connection Closed')
})

mongoose.connection.on('error', (error) => {
    console.log('[ERROR] ERROR: ' + error)
})

const run = async () =>{
    await mongoose.connect(URI, options)
}

module.exports = run