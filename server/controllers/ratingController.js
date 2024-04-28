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
        await RatingModel.create({
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

// GET RATED PRODUCT BY PRODUCT ID
const getRatedProductByProductID = async (req, res) => {
    const productID = req.params.productID;
    const ratedProduct = await RatingModel.find({productID: productID})
    .populate("productID")
    .populate("userID")
    if(ratedProduct.length > 0){
        res.status(200).json(ratedProduct)
    } else {
        res.status(404).json("Sản phẩm này chưa có đánh giá nào")
    }

}

// GET RATED PRODUCT BY USER ID
const getRatedProcuctByUserID = async (req, res) => {
    const userID = req.params.userID;
    // const isUser = await UserModel.findById(userID)
    const ratedProduct = await RatingModel.find({userID: userID})
    .populate("productID")
    .populate("userID")
    if(ratedProduct.length > 0){
        res.status(200).json(ratedProduct)
    } else {
        res.status(404).json("Người dùng này chưa đánh giá sản phẩm nào")
    }

}

// const PAGE_SIZE = 10
// const getRatedProductByProductID = async (req, res) => {
//     const page = req.query.page;
//     const productID = req.params.productID;
//     const ratedProduct = ProductModel.findById(productID)
//     if(page){
//         page = parseInt(page);
//         if(page <= 0) page = 1;
//         var elementsPass = (page -1)*PAGE_SIZE; // 10 phan tu tren 1 trang

//         await RatingModel.find({productID: productID}).skip(elementsPass).limit(PAGE_SIZE)
//         .populate("productID")
//         .populate("userID")
//         .then(data => {
//             res.json(data)
//         })
//         .catch(error => {
//             res.status(500).json(error)
//         })
//     } else {
//         if(ratedProduct){
//             res.status(200).json(ratedProduct)
//         } else {
//             res.status(404).json("Không tìm thấy productID")
//         }
//     }
// }


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

module.exports = {addRating, getRatedProductByProductID, getRatedUser, getRatedProcuctByUserID}