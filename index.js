const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./infrastructure/graphql/graphql");
const resolvers = require("./infrastructure/resolvers/resolvers");

const app = express();
const port = process.env.port || 3000;

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
