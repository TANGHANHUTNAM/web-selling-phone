const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderdetailSchema = new Schema({
    orderID: {
        type: String,
        required: true,
        ref: 'Order'
    },
    productID: {
        type: String,
        required: true,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const OrderDetailModel = mongoose.model('OrderDetail', orderdetailSchema);
module.exports = OrderDetailModel;