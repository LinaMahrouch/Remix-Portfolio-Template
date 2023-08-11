import { GraphQLClient } from "graphql-request"

export const hygraph = new GraphQLClient(
    process.env.HYGRAPH_KEY as string
);

