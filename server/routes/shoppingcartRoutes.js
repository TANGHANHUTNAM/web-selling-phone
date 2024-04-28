const express = require("express");
const router = express.Router();
const {getShoppingCartByUserID, createShoppingCart} = require("../controllers/shoppingcartController")
const {addProductToCart, deleteItemFromCart} = require("../controllers/shoppingcartitemController")


router.get("/user/:userID", getShoppingCartByUserID)
router.post("/user/:userID", createShoppingCart)
// router.post("/addCart/user/:userID", addProductToCart)
// router.patch("/delete/user/:userID/product/:productID", deleteItemFromCart)
router.post("/:cartID/shoppingcartitem", addProductToCart)
router.delete("/:cartID/shoppingcartitem/:productID", deleteItemFromCart)

module.exports = router;