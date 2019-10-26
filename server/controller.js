const logger = require('../service/logger')
const graphqlHTTP = require('express-graphql');
const schema = require('../database/schema')

const Controller = {
    version : (req, res) => {
        logger.info('version request')
        res.json({
            version: 0.1
        })
    },
    query : (req, res) => {
        logger.info(`query: ${req.body}`)
    },
    graphDebug: graphqlHTTP({   
        schema,
        graphiql: true
    })
}


module.exports = Controller;