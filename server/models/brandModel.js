const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
},
{
    timestamps: true,
},
{
    collection: "brands"
}
);

const BrandModel = mongoose.model("Brand", brandSchema);
module.exports = BrandModel;