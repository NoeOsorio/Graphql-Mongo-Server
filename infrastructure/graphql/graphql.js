const { makeExecutableSchema } = require("graphql-tools");

const resolvers = require("../resolvers/resolvers");
const loadGraphs = require("./readGraphql");
const typeDefs = loadGraphs();

console.log({ typeDefs });

console.log({ typeDefs });

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
