const graphql = require('graphql');
const logger = require('../service/logger');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull,
    GraphQLID, GraphQLInt, GraphQLSchema, GraphQLList } = graphql;
const Minion = require('./models/minion');

const MinionType = new GraphQLObjectType({
    name: 'Minion',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        code: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        created_at: { type: GraphQLString },
        instructions: { type: new GraphQLList(GraphQLString) },
        run: { type: GraphQLInt },
        success: { type: GraphQLInt },
        fails: { type: GraphQLInt }
        })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        minions: {
            type: GraphQLList(MinionType),
            args: {},
            resolve: async (parent, args) => {
                let minions = await Minion.find({}).exec()
                if (!minions) {
                    logger.error(`[ERROR] Minions finalAll`)
                    throw new Error('Error')
                }
                logger.info(`[INFO] Minions finalAll Query`)
                return minions
            }
        }
    }
});

//ONLY IN DEVELOPMENT
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addMinion: {
            type: MinionType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                code: { type: new GraphQLNonNull(GraphQLString) },
                instruction: { type: new GraphQLList(GraphQLString) }
            },
            resolve: async (parent, args) => {
                let minion = new Minion({
                    updated: new Date,
                    name: args.name,
                    instruction: args.instruction,
                    code: args.code
                });

                let newMinion = await minion.save();
                if (!newMinion) {
                    logger.error(`[ERROR] Minion save : ${minion}`)
                    throw new Error('Error');
                }
                logger.info(`[INFO] Minion saved: ${minion}`)
                return newMinion;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});