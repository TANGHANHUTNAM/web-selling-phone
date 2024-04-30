const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: 'users'
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;

// UserModel.create({
//     fullName: "Admin",
//     phoneNumber: "036323232323",
//     address: "An Giang",
//     password: "123456",
//     email: "tess@gmail.com",
// })