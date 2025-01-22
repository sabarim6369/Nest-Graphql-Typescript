// const {ApolloServer,gql}=require("apollo-server")
// const mongoose=require("mongoose");
// mongoose.connect('mongodb://localhost:27017/graphql').then(()=>{console.log("mongodb connected successfully")}).catch((err)=>{console.log("some error occurred",err)})
// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String,
//   });
//   const User = mongoose.model("User", userSchema); 
// const productsschema=new mongoose.Schema({
//     productname:String,
//     quantity:Number,
//     price:String

// }) 
// const productmodel=mongoose.model("Product",productsschema);
// const users=[]
// const typeDefs=gql`
// type User{
// id:ID!
// username:String!
// email:String!
// password:String!
// }
// type Authresponse{
// success:Boolean!
// message:String!
// user:User
// }
// type products{
// id:ID 
// productname:String!
// quantity:Int!
// price:String!
// }
// type Productresponse{
// success:Boolean!
// status:Int!
// message:String!
// product:[products]
// }

// type Query{
// login(email:String!,password:String!):Authresponse
// products(id:ID):Productresponse
// }
// type Mutation{
// signup(username:String,email:String!,password:String!):Authresponse
// changepassword(id:ID,newpassword:String):Authresponse
// addproduct(productname:String,quantity:Int,price:String):Productresponse
// }

// `

// const resolvers={
//    Query:{
//     login:async(_,{email,password})=>{
//         const user = await User.findOne({ email });
//         if (!user) {
//             return { success: false, message: "User not found", user: null };
//           }
    
//           if (user.password !== password) {
//             return { success: false, message: "Incorrect password", user: null };
//           }
//           return {success:true,message:"successfully logged in",user}
//     },
//     products:async(_,{id})=>{
//         if(id){
//             const neededproducts=await productmodel.findById(id)
//             if(!neededproducts){
//                 return {success:false,status:401,message:"product with given id not found",product:null}
//             }
//             return {success:true,status:200,message:"product with given found",product:[neededproducts]}
//         }
//         else{
//             const neededproducts=await productmodel.find();
//             if(!neededproducts){
//                 return {success:false,status:401,message:"Product list is empty",product:null}
//             }
//             return {success:true,status:200,message:"products found",product:neededproducts}
        
//         }
       
//         return {success:"products recieved"}

//     }
//    },
//    Mutation:{
//     signup:async(_,{username,email,password})=>{
//         const existinguser=await User.findOne({email:email})
//         if (existinguser) {
//             return { success: false, message: "Email already exists", user: null };
//           }
//           const newuser=new User({username,email,password})
//           await newuser.save();
//           return { success: true, message: "successfully signed in", user: newuser };
//         },
//     changepassword:async(_,{id,newpassword})=>{
// const user=await User.findById(id);
//         if(!user){
//             return {success:false,message:"user not found",user:null}
//         }
//         user.password=newpassword;
//         await user.save()
//         return {success:true,message:"password changed successfully",user:user}
//     },
//     addproduct:async(_,{productname,quantity,price})=>{
//         const newproduct=new productmodel({
//             productname,
//             quantity,
//             price
//         })
//         await newproduct.save();
//         return {success:true,status:200,message:"products added successfully",product:newproduct}

//     }
//    }
// }
// const server=new ApolloServer({typeDefs,resolvers})

// server.listen().then(({url})=>{
//     console.log(`🚀 Server ready at ${url}`);
// })


const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./typeDefs/typedefs");
const { resolvers } = require("./mainresolvers/main");
const mongoose = require("mongoose");
const { connectDB } = require("./config/db");

connectDB(); 

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
