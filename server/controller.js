const logger = require('../service/logger')

const Controller = {
    version : (req, res) => {
        logger.info('version request')
        res.json({
            version: 0.1
        })
    },
    query : (req, res) => {
        logger.info(`query: ${req.body}`)
    }
}


module.exports = Controller;