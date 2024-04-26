const CouponModel = require('../models/couponModel');

// GET ALL COUPONS
const PAGE_SIZE = 10
const getAllCoupons = async (req, res) => {
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE; // 10 phan tu tren 1 trang

        await CouponModel.find({}).skip(elementsPass).limit(PAGE_SIZE)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        await CouponModel.find({}).then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
}

// GET COUPON BY USER ID
const getCouponByUserID = async (req, res) => {
    const userID = req.params.userID;
    const coupon = await CouponModel.find({userID: userID})
    if(coupon.length > 0){
        res.status(200).json(coupon)
    } else {
        res.status(404).json("Không tìm thấy UserID!")
    }
}

// UPDATE COUPON
const updateCoupon = async (req, res) => {
    const userID = req.params.userID;
    const codeID = req.params.codeID;
    await CouponModel.findOneAndUpdate({
        userID: userID,
        code: codeID,
    },
    { 
        $set: {
        status: 0,
    }
    },
    ).then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

// ADD COUPON
const addCoupon = async (req, res) => {
    const userID = req.params.userID;
    const { code, discount } = req.body;
    const couponExist = await CouponModel.findOne({code: code, userID: userID})
    console.log(couponExist)
    if(!couponExist){
        const coupon = new CouponModel({
        userID: userID,
        code: code,
        discount: discount
    })
    await coupon.save()
    .then(data => {
        res.status(201).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
    } else {
        res.status(400).json("Coupon đã tồn tại!")
    }
    
    
}

module.exports = { getAllCoupons, getCouponByUserID, updateCoupon, addCoupon }