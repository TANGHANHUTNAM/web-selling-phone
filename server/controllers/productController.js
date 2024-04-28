const ProductModel = require("../models/productModel");

// GET PRODUCT BY ID
const getProductByID = async (req, res) => {
    var productID = req.params.productID;
    await ProductModel.findById(productID)
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}
// GET ALL PRODUCT
const PAGE_SIZE = 20
const getAllProduct = async (req, res) => {
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE; // 20 phan tu tren 1 trang

        await ProductModel.find({}).skip(elementsPass).limit(PAGE_SIZE)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        await ProductModel.find({}).then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
}

// GET PRODUCT BY BRAND
const getProductByBrand = async (req, res) => {

}

module.exports = {
    getAllProduct, getProductByID, getProductByBrand
}