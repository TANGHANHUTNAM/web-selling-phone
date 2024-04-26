const CartModel = require('../models/cartModel')
const ProductModel = require('../models/productModel')
// GET ALL CART ITEMS
const getCartItems = async (req, res) => {
    const userID = req.params.userID
    await CartModel.find({userID: userID})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

// ADD PRODUCT TO CART
const addProductToCart = async (req, res) => {
    const product = req.body
    const userID = req.params.userID
    const productItem = await ProductModel.findById(product.id)
    if(productItem) {
        await CartModel.findOneAndUpdate(
            {userID: userID},
            {
                $push: {
                    productItems: {
                        productID: product.id,
                        quantity: 1
                    }
                }
            }
        )
        .then(data => {
            res.status(200).json(data)
        })
    } else {
        res.status(404).json({message: 'Không tìm thấy sản phẩm'})
    }

}

// DELETE PRODUCT FROM CART
const deleteItemFromCart = async (req, res) => {
    const productID = req.params.productID
    const userID = req.params.userID
    await CartModel.findOneAndUpdate({
        userID: userID
    }, {
        $pull: { 
            productItems: {
                productID: productID
            }
        }
    
    }).then(data => {
        res.status(200).json({message: 'Xóa sản phẩm thành công', data})})
}

module.exports = { getCartItems, addProductToCart, deleteItemFromCart }