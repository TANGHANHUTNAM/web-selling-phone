const CartItemModel = require("../models/cartitemModel");

// Get all cart items by user ID
const getAllCartItemByUserID = async (req, res) => {
    var userID = req.params.userID;
    await CartItemModel.find({userID: userID})
    .populate('productID')
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

// Add new cart item
const addNewCartItem = async (req, res) => {
    const userID = req.params.userID;
    const {productID, price} = req.body;  
    const cartitem = new CartItemModel({
        userID: userID,
        productID: productID,
        price: price,
    });
    await cartitem.save()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })

}

// Delete cart item by product ID
const deleteItemByProductID = async (req, res) => {
    var productID = req.params.productID;
    var userID = req.params.userID;
    await CartItemModel.deleteOne({productID: productID, userID: userID})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

// get item by product ID
const getItemByProductID = async (req, res) => {
    var productID = req.params.productID;
    await CartItemModel.find({productID: productID})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

// Update item by product ID
const updateItemByProductID = async (req, res) => {
    var productID = req.params.productID;
    const {quantity} = req.body;
    await CartItemModel.updateOne({productID: productID}, {quantity: quantity})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}


module.exports = {
   updateItemByProductID,  getAllCartItemByUserID, addNewCartItem, deleteItemByProductID, getItemByProductID
}