import {GraphQLServer} from 'graphql-yoga';
import resolvers from './graphql/reolvers';

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(()=>console.log("Graphql Server Running"));