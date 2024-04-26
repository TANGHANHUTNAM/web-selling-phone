const mongoose = require("mongoose");
const Schema = moogoose.Schema;
const orderSchema = new Schema({
  userID: {
    type: String,
    required: true,
    ref: "User"
  },
  paymentID: {
    type: String,
    required: true,
    ref: "Payment",
  },
  note: {
    type: String,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
  order_status: {
    type: Number,
    default: 0,
  },
  total_price: {
    type: Number,
    required: true,
  },
  total_quantity: {
    type: Number,
    required: true,
  },
  total_discount: {
    type: Number,
    default: 0,
  },
  price_after_discount: {
    type: Number,
    required: true,
  },
},
{
  collection: "orders"
},
{
  timestamps: true,
});


const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;
