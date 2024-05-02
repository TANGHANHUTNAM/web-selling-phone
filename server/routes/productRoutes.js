const express = require("express")
const router = express.Router();
const { getAllProduct, getProductByID, getProductByBrand, addNewProduct } = require("../controllers/productController")

// Product
router.get("/", getAllProduct)
router.get("/:productID", getProductByID)
router.get("/brand/:brandID", getProductByBrand)
router.post("/", addNewProduct)

module.exports = router; 