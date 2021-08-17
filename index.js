const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./app/infrastructure/graphql/graphql");
const resolvers = require("./app/infrastructure/resolvers/resolvers");

const app = express();
const port = process.env.port || 3000;

require("./app/infrastructure/database/mongo")();

app.use(
  "/api",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Graphql server at http://localhost:${port}/api`);
});
