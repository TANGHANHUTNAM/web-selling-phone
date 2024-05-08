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
    var des = req.query.des;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE; // 20 phan tu tren 1 trang

        await ProductModel.find({}).skip(elementsPass).limit(PAGE_SIZE).sort({createdAt: -1})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else if(des) {
        await ProductModel.find({ des: { $regex: des, $options: 'i' } })
        .then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    } else {
        await ProductModel.find({})
        .sort({createdAt: -1})
        .then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
}

// GET PRODUCT BY BRAND
const PAGE_SIZE_Brand = 10
const getProductByBrand = async (req, res) => {
    const brand = req.params.brandID;
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE_Brand; // 20 phan tu tren 1 trang

        await ProductModel.find({brand: brand}).skip(elementsPass).limit(PAGE_SIZE_Brand)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        await ProductModel.find({brand: brand}).then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
}

// 
const addNewProduct = async (req, res) => {
    const {title, des, color, brand, number, thumbnail, new_price, rom, ram} = req.body;
    const product = new ProductModel({
        title: title,
        des: des,
        color: color,
        brand: brand,
        number: number,
        thumbnail: thumbnail,
        new_price: new_price,
        rom: rom,
        ram: ram,
    })
    await product.save()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

// GET ALL NEW PRODUCT
const PAGE_SIZE_NewProduct = 5
const getAllNewProduct = async (req, res) => {
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE_NewProduct;
        await ProductModel.find({is_newProduct: 1}).skip(elementsPass).limit(PAGE_SIZE_NewProduct)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        await ProductModel.find({is_newProduct: 1}).then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
}

// Get All Bestseller Product
const PAGE_SIZE_BestSeller = 5
const getAllBestsellerProduct = async (req, res) => {
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE_BestSeller;
        await ProductModel.find({is_bestSeller: 1}).skip(elementsPass).limit(PAGE_SIZE_BestSeller)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        await ProductModel.find({is_bestSeller: 1}).then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
}

// getAllOutOfStockProduct
const PAGE_SIZE_OutOfStockProduct = 9
const getAllOutOfStockProduct = async (req, res) => {
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE_OutOfStockProduct;
        await ProductModel.find({number: 0}).skip(elementsPass).limit(PAGE_SIZE_OutOfStockProduct).sort({createdAt: -1})
        .populate('brand')
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        await ProductModel.find({number: 0})
        .populate('brand')
        .then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
}

const updateProduct = async (req, res) => {
    const productID = req.params.productID;
    const {title, brand, thumbnail, number, ram, rom, new_price, old_price, is_newProduct, is_bestSeller, des, rating, color} = req.body;
    await ProductModel.updateOne({_id: productID}, {
        title: title,
        brand: brand,
        thumbnail: thumbnail,
        number: number,
        ram: ram,
        rom: rom,
        new_price: new_price,
        old_price: old_price,
        is_newProduct: is_newProduct,
        is_bestSeller: is_bestSeller,
        des: des,
        rating: rating,
        color: color
    })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

module.exports = {
   updateProduct ,getAllOutOfStockProduct,  getAllProduct, getProductByID, getProductByBrand, addNewProduct, getAllNewProduct, getAllBestsellerProduct
}