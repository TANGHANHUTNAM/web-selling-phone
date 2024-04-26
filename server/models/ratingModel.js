const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    productID: {
        type: String,
        required: true,
        ref: 'Product'
    },
    userID: {
        type: String,
        required: true,
        ref: 'User'
    },
    number_star: {
        type: Number,
        required: true,
    },
},
{
    timestamps: true,
},
{
    collection: "ratings"
});

const RatingModel = mongoose.model("Rating", ratingSchema);
module.exports = RatingModel;