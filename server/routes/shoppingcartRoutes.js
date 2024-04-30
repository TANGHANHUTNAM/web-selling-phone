const express = require("express");
const router = express.Router();
const {getShoppingCartByUserID, createShoppingCart} = require("../controllers/shoppingcartController")
const {addProductToCart, deleteItemFromCart, getItemInCart, getItemCartByThumbnailID} = require("../controllers/shoppingcartitemController")


router.get("/user/:userID", getShoppingCartByUserID)
router.post("/user/:userID", createShoppingCart)
// router.post("/addCart/user/:userID", addProductToCart)
// router.patch("/delete/user/:userID/product/:productID", deleteItemFromCart)
router.post("/:cartID/thumbnail/:thumbnailID/shoppingcartitem", addProductToCart)
router.delete("/:cartID/shoppingcartitem/:productID", deleteItemFromCart)
router.get("/:cartID/shoppingcartitem", getItemInCart)
// Thumbnail
router.get("/:cartID/thumbnail/:thumbnailID/shopcartitem", getItemCartByThumbnailID)

module.exports = router;