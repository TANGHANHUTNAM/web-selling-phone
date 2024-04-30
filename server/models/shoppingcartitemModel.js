const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingcartitemSchema = new Schema({
    shopcartID: {
        type: String,
        ref: "ShoppingCart"
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
    thumnail: {
        type: String,
        required: true,
        ref: "Thumnail"
    },
},
{
    timestamps: true,
},
{
    collection: "shoppingcartitems"
}
);

const ShoppingCartItemModel = mongoose.model("ShoppingCartItem", shoppingcartitemSchema);
module.exports = ShoppingCartItemModel;