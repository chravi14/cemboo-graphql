import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server Running : http://localhost:4000/graphql");
});
