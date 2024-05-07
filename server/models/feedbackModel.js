const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    userID: {
        type: String,
        required: true,
        ref: 'User'
    },
    subject: {
        type: String,
        required: true,
    },
    content: {  
        type: String,
        required: true,
    },
    approved: {
        type: Number,
        default: 0,
    },
},
{
    timestamps: true,
},
{
    collection: "feedbacks"
})

const FeedBackModel = mongoose.model("FeedBack", feedbackSchema);
module.exports = FeedBackModel;