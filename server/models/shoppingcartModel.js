const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingcartSchema = new Schema({
    userID: {
        type: String,
        unique: true,
        ref: "User"
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