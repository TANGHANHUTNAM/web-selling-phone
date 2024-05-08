const OrderModel = require("../models/orderModel");
// ADD NEW ORDER
const addOrder = async (req, res) => {
    const userID = req.params.userID;
    const paymentID = req.params.paymentID;
    const {note, total_price, total_quantity, total_discount, price_after_discount} = req.body;
    await OrderModel.create({
        userID: userID,
        paymentID: paymentID,
        note: note,
        total_price: total_price,
        total_quantity: total_quantity,
        total_discount: total_discount,
        price_after_discount: price_after_discount
    }).then(data => {
        res.status(200).json(data)
    }).catch(error => {
        res.status(500).json(error)
    })
}

// GET ORDER APPROVED 
const page_size_order_approved = 10;
const getOrderApproved = async (req, res) => {
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*page_size_order_approved;
        await OrderModel.find({order_status: 1}).skip(elementsPass).limit(page_size_order_approved).sort({createdAt: -1})
        .populate('userID')
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
         await OrderModel.find({order_status: 1})
        .populate('userID')
        .sort({createdAt: -1})
        .then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
}

// GET ORDER PENDING
const getOrderPending= async (req, res) => {
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*page_size_order_approved;
        await OrderModel.find({order_status: 0}).skip(elementsPass).limit(page_size_order_approved).sort({createdAt: -1})
        .populate('userID')
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
         await OrderModel.find({order_status: 0})
        .populate('userID')
        .sort({createdAt: -1})
        .then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
}

// GET ORDER APPROVED BY USER ID
const getOrderApprovedByUserID = async (req, res) => {
    const userID = req.params.userID;
    const orders = await OrderModel.find({userID: userID, order_status: 1})
    .populate("userID")
    if(orders.length > 0){
        res.status(200).json(orders)
    } else {
        res.status(404).json("Không có đơn hàng nào đã được xử lý")
    }
}

// GET ORDER PENDING BY USER ID
const getOrderPendingByUserID = async (req, res) => {
    const userID = req.params.userID;
    const orders = await OrderModel.find({userID: userID, order_status: 0})
    .populate("userID")
    if(orders.length > 0){
        res.status(200).json(orders)
    } else {
        res.status(404).json("Không có đơn hàng nào cần xử lý")
    }
}

// UPDATE ORDER STATUS
const updateOrderStatus = async (req, res) => {
    const orderID = req.params.orderID;
    const userID = req.params.userID;
    await OrderModel.findByIdAndUpdate({
        userID: userID,
        _id: orderID
    },{
        order_status: 1
    }).then(data => {
        res.status(200).json({message: "Đơn hàng đã được xử lý", data})
    }).catch(error => {
        res.status(500).json(error)
    })
}

const getOrder = async (req, res) => {
    const userID = req.params.userID;
    await OrderModel.find({userID: userID})
    .then(data => {
        res.status(200).json(data)
    }).catch(error => {
        res.status(500).json(error)
    })
    
}

module.exports= {
   getOrder ,getOrderPendingByUserID , getOrderApprovedByUserID, updateOrderStatus , addOrder, getOrderApproved, getOrderPending
}