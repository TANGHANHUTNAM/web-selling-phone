const GalleryModel = require('../models/galleryModel');

// Get gallery by productID
const getGalleryByProductID = async (req, res) => {
    const productID = req.params.productID;
    await GalleryModel.find({productID: productID})
    .populate('productID')
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

// Add gallery for product
const addGalleryForProductID = async (req, res) => {
    const productID = req.params.productID;
    const link = req.body.link;
    const gallery = new GalleryModel({
        link: link,
        productID: productID
    })
    await gallery.save()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })

}

module.exports = {
    getGalleryByProductID, addGalleryForProductID
}