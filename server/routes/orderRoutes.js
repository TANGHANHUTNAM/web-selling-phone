const express = require("express");
const router = express.Router();
const {getOrder, updateOrderStatus, addOrder, getOrderApproved , getOrderApprovedByUserID ,getOrderPending, getOrderPendingByUserID} = require("../controllers/orderController")
const {addOrderDetail} = require("../controllers/orderdetailController")
router.post("/user/:userID/:paymentID", addOrder);
router.get("/approved", getOrderApproved)
router.get("/pending", getOrderPending)
router.get("/approved/:userID", getOrderApprovedByUserID)
router.get("/pending/:userID", getOrderPendingByUserID)
router.put("/update/:userID/:orderID", updateOrderStatus)
router.get("/user/:userID", getOrder)
router.post("/:orderID/orderdetail", addOrderDetail)
// routet.get("/user/:userID", getOrderLatest)
module.exports = router;    