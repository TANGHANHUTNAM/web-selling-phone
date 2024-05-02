const express = require("express");
const router = express.Router();
const { addGalleryForProductID, getGalleryByProductID } = require("../controllers/galleryController");


router.post("/product/:productID", addGalleryForProductID);
router.get("/product/:productID", getGalleryByProductID)

module.exports = router;