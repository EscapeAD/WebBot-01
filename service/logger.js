const winston = require('winston');
const { format } = require('logform');
const { combine, timestamp } = format;
const LOG_DIR = process.env.LOG_DIR ? process.env.LOG_DIR : '.';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.json()
    ),
    // defaultMeta: { service: 'minion-service' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({
            filename: `${LOG_DIR}/error.log`, level: 'error' }),
        new winston.transports.File({
            filename: `${LOG_DIR}/combined.log` })
    ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

module.exports = logger;