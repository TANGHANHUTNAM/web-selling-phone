const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    link: {
        type: String,
        required: true,
    },
    productID: {
        type: String,
        required: true,
        ref: 'Product'
    },
},
{
    timestamps: true,
},
{
    collection: 'gallerys'
});

const GalleryModel = mongoose.model('Gallery', gallerySchema);
module.exports = GalleryModel;