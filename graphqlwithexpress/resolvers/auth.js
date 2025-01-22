const User = require("../models/user");

const login = async (_, { email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    return { success: false, message: "User not found", user: null };
  }

  if (user.password !== password) {
    return { success: false, message: "Incorrect password", user: null };
  }
  return { success: true, message: "Successfully logged in", user };
};

const signup = async (_, { username, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { success: false, message: "Email already exists", user: null };
  }

  const newUser = new User({ username, email, password });
  await newUser.save();
  return { success: true, message: "Successfully signed up", user: newUser };
};

const changepassword = async (_, { id, newpassword }) => {
  const user = await User.findById(id);
  if (!user) {
    return { success: false, message: "User not found", user: null };
  }
  user.password = newpassword;
  await user.save();
  return { success: true, message: "Password changed successfully", user };
};

module.exports = { login, signup, changepassword };
