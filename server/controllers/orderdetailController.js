const OrderDetailModel = require('../models/orderdetailModel');
// ADD NEW ORDER DETAIL
const addOrderDetail = async (req, res) => {
    const orderID = req.params.orderID;
    const {productID, quantity, price} = req.body;
    await OrderDetailModel.create({
        orderID: orderID,
        productID: productID,
        quantity: quantity,
        price: price
    }).then(data => {
        res.status(200).json(data)
    }).catch(error => {
        res.status(500).json(error)
    })
}

module.exports = {
    addOrderDetail
}