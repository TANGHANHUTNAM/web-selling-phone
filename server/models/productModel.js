const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
      ref: "Brand",
    },
    number: {
      type: Number,
      required: true,
    },
    thumbnail:{
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
      default: "0",
    },
    is_bestSeller: {
      type: Number,
      required: true,
      default: 0,
    },
    is_newProduct: {
      type: Number,
      required: true,
      default: 1,
    },
    rom: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
      default: "0",
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

