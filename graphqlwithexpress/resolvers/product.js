const Product = require("../models/product");

const products = async (_, { id }) => {
  if (id) {
    const neededProduct = await Product.findById(id);
    if (!neededProduct) {
      return { success: false, status: 401, message: "Product not found", product: null };
    }
    return { success: true, status: 200, message: "Product found", product: [neededProduct] };
  } else {
    const neededProducts = await Product.find();
    if (!neededProducts || neededProducts.length === 0) {
      return { success: false, status: 401, message: "Product list is empty", product: null };
    }
    return {
      success: true,
      status: 200,
      message: "Products found",
      product: neededProducts,
    };
  }
};

const addProduct = async (_, { productname, quantity, price }) => {
  const newProduct = new Product({ productname, quantity, price });
  await newProduct.save();
  return {
    success: true,
    status: 200,
    message: "Product added successfully",
    product: newProduct,
  };
};

module.exports = { products, addProduct };
