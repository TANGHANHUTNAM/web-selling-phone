const express = require("express")
const router = express.Router();
const { getAllProduct, getProductByID, getProductByBrand, addNewProduct, getAllNewProduct, getAllBestsellerProduct } = require("../controllers/productController")

// Product
router.get("/", getAllProduct)
router.get("/:productID", getProductByID)
router.get("/brand/:brandID", getProductByBrand)
router.post("/", addNewProduct)
router.get("/products/new", getAllNewProduct)
router.get("/products/bestseller", getAllBestsellerProduct)

module.exports = router; 