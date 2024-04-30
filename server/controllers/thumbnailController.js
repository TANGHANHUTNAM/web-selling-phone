const ThumbnailModel = require("../models/thumbnailModel");

// ADD THUMBNAIL
const addThumbnail = async (req, res) => {
    const productID = req.params.productID;
    const {thumbnail_link, color, number} = req.body;
    const thumbnail = new ThumbnailModel({
        productID: productID,
        thumbnail_link: thumbnail_link,
        color: color,
        number: number
    });
    await thumbnail.save()
    .then(data => {
        res.status(200).json({message: "Thêm thumbnail thành công!", data})
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

// GET THUMBNAIL BY PRODUCT ID
const getThumbnailByProductID = async (req, res) => {
    const productID = req.params.productID;
    const thumbnails = await ThumbnailModel.find({productID: productID})
    if(thumbnails) {
        res.status(200).json(thumbnails)
    } else {
        res.status(404).json({message: 'Không tìm thấy thumbnail'})
    }
}

// GET THUMBNAIL BY ID
const getThumbnailByID = async (req, res) => {
    const thumbnailID = req.params.thumbnailID;
    const thumbnail = await ThumbnailModel.findById(thumbnailID)
    if(thumbnail) {
        res.status(200).json(thumbnail)
    } else {
        res.status(404).json({message: 'Không tìm thấy thumbnail'})
    }
}

module.exports = {addThumbnail, getThumbnailByProductID, getThumbnailByID}