const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("../resolvers/resolvers");
const loadGraphql = require("./loadGraphql");
const typeDefs = loadGraphql();

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
