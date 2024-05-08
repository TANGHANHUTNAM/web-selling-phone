const express = require("express")
const router = express.Router();
const {updateProduct, getAllOutOfStockProduct ,getAllProduct, getProductByID, getProductByBrand, addNewProduct, getAllNewProduct, getAllBestsellerProduct } = require("../controllers/productController")

// Product
router.get("/", getAllProduct)
router.get("/:productID", getProductByID)
router.get("/brand/:brandID", getProductByBrand)
router.post("/", addNewProduct)
router.get("/products/new", getAllNewProduct)
router.get("/products/bestseller", getAllBestsellerProduct)
router.get("/listproduct/out-of-stock-product", getAllOutOfStockProduct)
router.put("/:productID", updateProduct)
module.exports = router; 