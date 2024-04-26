const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    method: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
},
{
    timestamps: true,
},
{
    collection: "payments"
})

const PayMentModel = mongoose.model("PayMent", paymentSchema);
module.exports = PayMentModel;