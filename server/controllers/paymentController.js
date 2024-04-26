const PayMentModel = require('../models/paymentModel');

// ADD NEW PAYMENT
const addPayment = async (req, res) => {
    const method = req.body.method;
    await PayMentModel.create({
        method: method,
    }).then(data => {
        res.status(200).json(data)
    }).catch(error => {
        res.status(500).json(error)
    })
}

module.exports = {addPayment}