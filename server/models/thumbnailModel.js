const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thumbnailSchema = new Schema({
    productID: {
        type: String,
        ref: "Product"
    },
    thumbnail_link: {
        type: String,
        required: true,
        unique: true
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
{
    timestamps: true,
},
{
    collection: "thumbnails",
});

const ThumbnailModel = mongoose.model("Thumbnail", thumbnailSchema);
module.exports = ThumbnailModel; 
