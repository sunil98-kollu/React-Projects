const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName:{ type: String, required: true},
  phoneNumber:{ type: String, required: true}
});
const userModel = mongoose.model("register", userSchema);
module.exports = { userModel };
