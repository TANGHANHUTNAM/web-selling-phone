const express = require("express");
const router = express.Router();
const { getCartItems, addProductToCart, deleteItemFromCart} = require("../controllers/cartController")

router.get("/user/:userID", getCartItems)
router.post("/addCart/user/:userID", addProductToCart)
router.patch("/delete/user/:userID/product/:productID", deleteItemFromCart)

module.exports = router;