const BrandModel = require("../models/brandModel");

// Get all brands
const getAllBrand = async (req, res) => {
    await BrandModel.find({})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

// Add new brand
const addNewBrand = async (req, res) => {
    const {name} = req.body;
    const brand = new BrandModel({
        name: name
    });
    await brand.save()
    .then(data => {
        res.status(201).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

module.exports = {
    getAllBrand, addNewBrand
}