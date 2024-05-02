const express = require("express");
const router = express.Router();
const {updateItemByProductID, getItemByProductID ,getAllCartItemByUserID, addNewCartItem, deleteItemByProductID} = require("../controllers/cartitemController")

router.get("/user/:userID", getAllCartItemByUserID)
router.post("/user/:userID", addNewCartItem)
router.delete("/product/:productID", deleteItemByProductID)
router.get("/product/:productID", getItemByProductID)
router.put("/product/:productID", updateItemByProductID)

module.exports = router;