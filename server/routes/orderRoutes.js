const express = require("express");
const router = express.Router();
const { updateOrderStatus, addOrder, getOrderApproved , getOrderApprovedByUserID ,getOrderPending, getOrderPendingByUserID} = require("../controllers/orderController")

router.post("/user/:userID/:paymentID", addOrder);
router.get("/approved", getOrderApproved)
router.get("/pending", getOrderPending)
router.get("/approved/:userID", getOrderApprovedByUserID)
router.get("/pending/:userID", getOrderPendingByUserID)
router.put("/update/:userID/:orderID", updateOrderStatus)
module.exports = router;    