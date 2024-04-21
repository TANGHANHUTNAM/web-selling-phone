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

// for(let i = 2; i < 20; i++){
//   UserModel.create({
//     fullName: `Nam ${i}`,
//     phoneNumber: `0000000${i}`,
//     email: `nam${i}@gmail.com`,
//     password: `123456${i}`
//   })
// }
