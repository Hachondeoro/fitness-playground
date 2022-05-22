import { GraphQLClient } from "graphql-request";
export function request({ query, variables }) {
  const endpoint = `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer 93712a30d09f968a8d7c3d2fbe801f`,
    },
  });
  return client.request(query, variables);
}
