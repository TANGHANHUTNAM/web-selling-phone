const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const couponSchema = new Schema({
    userID: {
        type: String,
        required: true,
        ref: 'User'
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    discount: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        required: true,
        default: 1
    },
},
{
    timestamps: true,
},
{
    collection: 'coupons'
});

const CouponModel = mongoose.model('Coupon', couponSchema);
module.exports = CouponModel;