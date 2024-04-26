const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    thumbnail: [
      {
        thumbnail_link: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
        number: {
          type: Number,
          required: true, 
        }
      },
    ],
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
//   id: 16,
//   title: "Oppo Reno11",
//   des: "Oppo Reno11 128GB Xanh Chính Hãng VN/A",
//   thumbnail: [
//     // { thumbnail_link: "./images/iphone15_vang.jpg", color: "Vàng", number: 5},
//     { thumbnail_link: "./images/opporeno11_xanh.jpg", color: "Xanh", number: 2},
//     // { thumbnail_link: "./images/opporeno11pro_xam.jpg", color: "Xám", number: 2},
//   ],
//   brand: "Oppo",
//   new_price: "12000000",
//   old_price: "13000000",
//   rom: "128GB",
//   total_rating: 0,
//   total_star: 0,
// });
