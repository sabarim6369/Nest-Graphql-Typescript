const{login,signup}=require("./resolvers/auth")
const{addProduct,products}=require("./resolvers/product")
const resolvers = {
  Query: {
    login,
    products,
  },
  Mutation: {
    signup,
    addproduct: addProduct,
  },
};
module.exports={resolvers}