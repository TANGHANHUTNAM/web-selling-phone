const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartitemSchema = new Schema({
    userID:{
        type: String,
        ref: 'User',
        required: true,
    },
    productID:{
        type: String,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    price: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
},
{
    collection: "cartitems"
}
);

const CartItemModel = mongoose.model("Cartitem", cartitemSchema);
module.exports = CartItemModel;