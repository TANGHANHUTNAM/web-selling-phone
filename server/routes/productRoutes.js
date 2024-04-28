const express = require("express")
const router = express.Router();
const { getAllProduct, getProductByID, getProductByBrand } = require("../controllers/productController")

router.get("/", getAllProduct)
router.get("/:productID", getProductByID)
router.get("/:brand", getProductByBrand)

module.exports = router; 