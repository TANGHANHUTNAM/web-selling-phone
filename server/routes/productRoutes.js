const express = require("express")
const router = express.Router();
const { getAllProduct, getProductByID, getProductByBrand } = require("../controllers/productController")
const { addThumbnail, getThumbnailByProductID, getThumbnailByID } = require("../controllers/thumbnailController")

// Product
router.get("/", getAllProduct)
router.get("/:productID", getProductByID)
router.get("/:brand", getProductByBrand)
// Thumbnail
router.post("/:productID/thumbnail", addThumbnail)
router.get("/:productID/thumbnail", getThumbnailByProductID)
router.get("/thumbnail/:thumbailID", getThumbnailByID)

module.exports = router; 