const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected!"));


  
// const Schema = mongoose.Schema;

// const Account = new Schema(
//   {
//     username: String,
//     password: String,
//     age: Number,
//     salary: Number,
//   },
//   { collection: "Account" }
// );

// const AccountModel = mongoose.model("account", Account);

// AccountModel.find({
//   username: "student1",
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log("error");
//   });
