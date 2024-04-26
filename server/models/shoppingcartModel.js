const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingcartSchema = new Schema({
    cartID: {
        type: String,
        unique: true,
        ref: "User"
    },
    total :{
        type: Number,
        required: true,
    },
},
{
    timestamps: true,
},
{
    collection: "shoppingcarts"
});

const ShoppingCartModel = mongoose.model("ShoppingCart", shoppingcartSchema);
module.exports = ShoppingCartModel;