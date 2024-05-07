const express = require("express");
const router = express.Router();
const {deleteAllCartItemByUserID ,updateItemByProductID, getItemByProductID ,getAllCartItemByUserID, addNewCartItem, deleteItemByProductID} = require("../controllers/cartitemController")

router.get("/user/:userID", getAllCartItemByUserID)
router.post("/user/:userID", addNewCartItem)
router.delete("/user/:userID/product/:productID", deleteItemByProductID)
router.get("/product/:productID", getItemByProductID)
router.put("/product/:productID", updateItemByProductID)
router.delete("/user/:userID", deleteAllCartItemByUserID)

module.exports = router;