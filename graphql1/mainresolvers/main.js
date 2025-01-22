const { login, signup, changepassword } = require("../resolvers/auth");
const { products, addProduct } = require("../resolvers/product");

const resolvers = {
  Query: {
    login,
    products,
  },
  Mutation: {
    signup,
    changepassword,
    addproduct: addProduct,
  },
};

module.exports = { resolvers };
