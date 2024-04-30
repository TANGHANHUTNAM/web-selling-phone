const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    des: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    new_price: {
      type: String,
      required: true,
    },
    old_price: {
      type: String,
      required: true,
    },
    is_bestSeller: {
      type: Boolean,
      required: true,
      default: false,
    },
    is_newProduct: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: {
      type: Number,
      default: 1,
    },
    rom: {
      type: String,
      required: true,
    },
    total_rating: {
      type: Number,
      required: true,
    },
    total_star: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "products",
  }
);
const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;

// ProductModel.create({
//   title: "Iphone 12",
//   des: "Iphone 12 128GB Trắng/Đỏ Chính Hãng VN/A",
//   brand: "Apple",
//   new_price: "12000000",
//   old_price: "13000000",
//   rom: "128GB",
//   total_rating: 0,
//   total_star: 0,
// });
