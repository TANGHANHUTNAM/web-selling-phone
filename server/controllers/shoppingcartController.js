const ShoppingCartModel = require('../models/shoppingcartModel')
const ProductModel = require('../models/productModel')
// // GET ALL CART ITEMS
// const getCartItems = async (req, res) => {
//     const userID = req.params.userID
//     await CartModel.find({userID: userID})
//     .then(data => {
//         res.status(200).json(data)
//     })
//     .catch(error => {
//         res.status(500).json(error)
//     })
// }

// GET CART BY USER ID
const getShoppingCartByUserID = async (req, res) => {
    const userID = req.params.userID
    const shoppingcart = await ShoppingCartModel.find({userID: userID})
    .populate('userID')
    if(shoppingcart) {
        res.status(200).json(shoppingcart)
    } else {
        res.status(404).json({message: 'Không tìm thấy giỏ hàng'})
    }
}

// CREATE SHOPPING CART FOR USER
const createShoppingCart = async (req, res) => {
    const userID = req.params.userID
    const cart = new ShoppingCartModel({
        userID: userID,
    })
    const userCart = await ShoppingCartModel.findOne({userID: userID})
   if(userCart){
    res.status(400).json({message: 'User đã có giỏ hàng'})
   } else {
     await cart.save()
    .then(data => {
        res.status(200).json(data)
    })
   }

}

// // ADD PRODUCT TO CART
// const addProductToCart = async (req, res) => {
//     const product = req.body
//     const userID = req.params.userID
//     const productItem = await ProductModel.findById(product.id)
//     if(productItem) {
//         await CartModel.findOneAndUpdate(
//             {userID: userID},
//             {
//                 $push: {
//                     productItems: {
//                         productID: product.id,
//                         quantity: 1
//                     }
//                 }
//             }
//         )
//         .then(data => {
//             res.status(200).json(data)
//         })
//     } else {
//         res.status(404).json({message: 'Không tìm thấy sản phẩm'})
//     }

// }

// // DELETE PRODUCT FROM CART
// const deleteItemFromCart = async (req, res) => {
//     const productID = req.params.productID
//     const userID = req.params.userID
//     await CartModel.findOneAndUpdate({
//         userID: userID
//     }, {
//         $pull: { 
//             productItems: {
//                 productID: productID
//             }
//         }
    
//     }).then(data => {
//         res.status(200).json({message: 'Xóa sản phẩm thành công', data})})
// }

module.exports = {getShoppingCartByUserID, createShoppingCart}