const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true, //test idea: what if my password is already in the DB?
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
  // profile: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "profile",
  // },
});

module.exports = User = mongoose.model("user", UserSchema);
