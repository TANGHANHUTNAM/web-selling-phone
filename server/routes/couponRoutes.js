const express = require("express");
const router = express.Router();
const { getAllCoupons, getCouponByUserID, updateCoupon, addCoupon } = require("../controllers/couponController");

router.get("/", getAllCoupons);
router.post("/:userID", addCoupon)
router.put("/:userID/:codeID", updateCoupon)
router.get("/:userID", getCouponByUserID)

module.exports = router;