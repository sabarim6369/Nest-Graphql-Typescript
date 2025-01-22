const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/graphql')
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log("Some error occurred", err));
};

module.exports = { connectDB };
    