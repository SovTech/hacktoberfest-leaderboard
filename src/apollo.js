import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://bwlazna1pb.execute-api.eu-west-1.amazonaws.com/prod/graphql"
  }),
  cache: new InMemoryCache()
});

export { client };
