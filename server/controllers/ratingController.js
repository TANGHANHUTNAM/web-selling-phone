const RatingModel = require("../models/ratingModel");
const ProductModel = require("../models/productModel");
const UserModel = require("../models/userModel");

// ADD NEW RATING
const addRating = async (req, res) => {
    const productID = req.params.productID;
    const userID = req.params.userID;
    const number_star = req.body.number_star;
    const user = await UserModel.findById(userID);
    if(user){
        const product = await RatingModel.create({
        productID: productID,
        userID: userID,
        number_star: number_star
    }).then(data => {
        res.status(200).json(data)
    }).catch(error => { 
        res.status(500).json(error)
    })
    }
    
}

// GET RATED PRODUCT
const PAGE_SIZE = 10
const getRatedProduct = async (req, res) => {
    const page = req.query.page;
    const productID = req.params.productID;
    const product = ProductModel.findById(productID);
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE; // 10 phan tu tren 1 trang

        await RatingModel.find({productID: productID}).skip(elementsPass).limit(PAGE_SIZE)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        await RatingModel.find({productID: productID})
    }
}


// GET RATED USER
const getRatedUser = async (req, res) => {
    const page = req.query.page;
    const userID = req.params.userID;
    const ratedUser = await RatingModel.find({userID: userID})
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE; // 10 phan tu tren 1 trang

        await RatingModel.find({userID: userID}).skip(elementsPass).limit(PAGE_SIZE)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        if(ratedUser.length > 0){
            res.status(200).json(ratedUser)
        } else {
            res.status(404).json("Không tìm thấy userID")
        }
    }
}

module.exports = {addRating, getRatedProduct, getRatedUser}