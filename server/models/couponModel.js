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
    },
    discount: {
        type: Number,
        required: true,
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