const {ApolloServer}=require("apollo-server")
const { connectDB } = require("./config/db");
const {typeDefs}=require("./typedefs/typedefs")
const {resolvers}=require("./resolvers");
connectDB();
const server=new ApolloServer({
    typeDefs,resolvers
})
server.listen().then(({url})=>{
    console.log(`🚀 Server ready at ${url}`);
})