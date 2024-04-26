const express = require("express")
const router = express.Router();
const { getAllProduct, getProductByID } = require("../controllers/productController")

router.get("/", getAllProduct)
router.get("/:productID", getProductByID)

module.exports = router;