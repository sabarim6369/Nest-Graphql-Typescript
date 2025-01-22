const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productname: String,
  quantity: Number,
  price: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
