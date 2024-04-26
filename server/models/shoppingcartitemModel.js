const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingcartitemSchema = new Schema({
    shopcartID: {
        type: String,
        ref: "ShoppingCart"
    },
    productID:{
        type: String,
        ref: "Product"
    },
    quantity: {
        type: Number,
        default: 1,
    },
    price: {
        type: Number,
        required: true,
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