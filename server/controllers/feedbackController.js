const FeedBackModel = require("../models/feedbackModel");
const UserModel = require("../models/userModel");

// GET FeedBack BY USER ID
const getFeedbacks = async (req, res) => {
    var userID = req.params.userID;
    const feedback = await FeedBackModel.find({userID: userID})
    if(feedback.length > 0){
       res.status(200).json(feedback)
    } else {
        res.status(404).json({message: "Không tìm thấy phản hồi!"})
    }
}

// GET ALL FEEDBACKS
const PAGE_SIZE = 5
const getAllFeedbacks = async (req, res) => {
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE; // 5 phan tu tren 1 trang

        await FeedBackModel.find({}).skip(elementsPass).limit(PAGE_SIZE)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        await FeedBackModel.find({}).then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
}

const addFeedback = async (req, res) => {
    const subject = req.body.subject;
    const content = req.body.content;
    const userID = req.params.userID;
    const user = await UserModel.find({_id: userID})
   
    if(user){
        await FeedBackModel.create({
        userID: userID,
        subject: subject,
        content: content,
    }).then(data => {
        res.status(200).json({message: "Thêm phản hồi thành công!", data})
    }).catch(error => {
        res.status(500).json(error)
    })
    } else {
        res.status(401).json({message: "Không tìm thấy người dùng!"})
    }
}

// GET ALL FEEDBACKS APPROVED
const PAGE_SIZE_APPROVED = 4
const getAllFeedbacksApproved = async (req, res) => {
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE_APPROVED; // 4 phan tu tren 1 trang

        await FeedBackModel.find({approved: 1}).skip(elementsPass).limit(PAGE_SIZE_APPROVED).sort({createdAt: -1})
        .populate('userID')
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        await FeedBackModel.find({approved: 1})
        .populate('userID')
        .then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
}

module.exports = {
    getFeedbacks, getAllFeedbacks, addFeedback,getAllFeedbacksApproved
}