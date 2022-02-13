import { GraphQLSchema } from "graphql";
import { RootQuery } from "./types";

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
