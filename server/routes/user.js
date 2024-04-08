const express = require("express");
const router = express.Router();
const User = require("../models/User")
const { verifyToken, verifyTokenAndAuthorization } = require("../middleware/verifyToken")

router.put("/:id", verifyTokenAndAuthorization, (req, res) => {
    if(req.body.password) {
        req.body.password =  CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id)
    } catch (error) {
        
    }
})
module.exports =  router;