
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userID: {
        type: String,
        required: true,
        unique: true,
        ref: 'User'
    },
    productItems: [
        {
            productID: {
                type: String,
                ref: 'Product',
                unique: false
            },
            quantity: {
                type: Number,
                default: 1,
            },

        }
    ]
},
{
    timestamps: true,
},
{
    collection: "carts"
});

const CartModel = mongoose.model("Cart", cartSchema);
module.exports = CartModel;


