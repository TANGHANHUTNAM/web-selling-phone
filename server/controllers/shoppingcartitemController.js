const ShoppingCartItemModel = require("../models/shoppingcartitemModel");
const ShoppingCartModel = require("../models/shoppingcartModel");
const ProductModel = require("../models/productModel");
// ADD PRODUCT TO CART
const addProductToCart = async (req, res) => {
    const product = req.body
    const cartID = req.params.cartID
    const productIsExist = await ShoppingCartItemModel.find({productID: product._id})
    console.log(productIsExist)
    if(productIsExist.length === 0) {
        await ShoppingCartItemModel.create({
            shopcartID: cartID,
            productID: product._id,
            price: product.new_price
        })
        .then(data => {
            res.status(200).json(data)
        })
    } else {
        await ShoppingCartItemModel.findOneAndUpdate(
            {productID: product._id},
            {
                $inc: {quantity: 1}
            }
        )
        .then(data => {
            res.status(200).json(data)
        })
    }

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

module.exports = { addProductToCart, deleteItemFromCart }