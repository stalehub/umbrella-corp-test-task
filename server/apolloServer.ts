import { IServerContext } from '@/@types/types';
import { ApolloServer } from '@apollo/server';
import { GraphQLSchema } from 'graphql';
import http from 'http';

// create a GraphQL.js GraphQLSchema instance from GraphQL schema
// for faster GraphQL development.
import { makeExecutableSchema } from '@graphql-tools/schema';

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import apolloErrorFormatter from '@server/apolloErrorFormatter';
import resolvers from '@server/graphql/resolvers';
import typeDefs from '@server/graphql/schema';

/**
 * @see https://the-guild.dev/graphql/tools/docs/generate-schema
 */
const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

/**
 * @see https://www.apollographql.com/docs/apollo-server/api/express-middleware
 */
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const createApolloServer = (
  httpServer: http.Server<
    typeof http.IncomingMessage,
    typeof http.ServerResponse
  >
) => {
  return new ApolloServer<IServerContext>({
    schema,
    // Refer to https://www.apollographql.com/docs/apollo-server/data/errors/
    // For client responses, set a formatError hook that is
    // run on each error before it's passed back to the client.
    formatError: apolloErrorFormatter,
    // Initialization as before, plus the drain plugin
    // for our httpServer.
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    status400ForVariableCoercionErrors: true,
  });
};

export default createApolloServer;
