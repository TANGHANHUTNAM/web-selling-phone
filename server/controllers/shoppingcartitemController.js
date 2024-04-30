const ShoppingCartItemModel = require("../models/shoppingcartitemModel");
const ShoppingCartModel = require("../models/shoppingcartModel");
const ProductModel = require("../models/productModel");
// ADD PRODUCT TO CART
const addProductToCart = async (req, res) => {
    const {productID, price} = req.body
    const thumbnailID = req.params.thumbnailID
    const cartID = req.params.cartID
    await ShoppingCartItemModel.create({
        shopcartID: cartID,
        productID: productID,
        price: price,
        thumnail: thumbnailID
    })
    .then(data => {
        res.status(200).json(data)
    })
}

// DELETE ITEM FROM CART
const deleteItemFromCart = async (req, res) => {
    const productID = req.params.productID
    const cartID = req.params.cartID
    await ShoppingCartItemModel.findOneAndDelete({
        productID: productID,
        shopcartID: cartID
    })
    .then(data => {
        res.status(200).json({message: 'Xóa sản phẩm thành công', data})
    })
    .catch(err => {
        res.status(400).json({message: 'Xóa sản phẩm thất bại', err})
    })
}

// GET ITEM IN CART
const getItemInCart = async (req, res) => {
    const cartID = req.params.cartID
    const itemInCart = await ShoppingCartItemModel.find({shopcartID: cartID})
    .populate('productID')
    .populate()
    if(itemInCart) {
        res.status(200).json(itemInCart)
    } else {
        res.status(404).json({message: 'Không tìm thấy sản phẩm trong giỏ hàng'})
    }
}

// GET THUMBNAIL BY ID IN SHOPPING CART
const getItemCartByThumbnailID = async (req, res) => {
    const thumbnailID = req.params.thumbnailID
    const cartID = req.params.cartID
    const CartItem = await ShoppingCartItemModel.find({shopcartID: cartID, thumnail: thumbnailID})
    if(CartItem.length > 0) {
        res.status(200).json(CartItem)
    } else {
        res.status(404).json({message: 'Không tìm thấy sản phẩm trong giỏ hàng'})
    }
}
module.exports = {getItemCartByThumbnailID, addProductToCart, deleteItemFromCart, getItemInCart }