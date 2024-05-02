const ProductModel = require("../models/productModel");

// GET PRODUCT BY ID
const getProductByID = async (req, res) => {
    var productID = req.params.productID;
    await ProductModel.findById(productID)
    .populate('brand')
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
    const brand = req.params.brandID;
    await ProductModel.find({brand: brand})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

// 
const addNewProduct = async (req, res) => {
    const {title, des, color, brand, number, thumbnail, new_price, rom} = req.body;
    const product = new ProductModel({
        title: title,
        des: des,
        color: color,
        brand: brand,
        number: number,
        thumbnail: thumbnail,
        new_price: new_price,
        rom: rom,
    })
    await product.save()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}
module.exports = {
    getAllProduct, getProductByID, getProductByBrand, addNewProduct
}