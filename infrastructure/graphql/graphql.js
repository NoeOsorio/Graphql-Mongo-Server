const { makeExecutableSchema } = require("graphql-tools");
const { readFileSync } = require("fs");
const { join } = require("path");
const resolvers = require("../resolvers/resolvers");

const typeDefs = readFileSync(join(__dirname, ".", "schema.graphql"), "utf-8");

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
