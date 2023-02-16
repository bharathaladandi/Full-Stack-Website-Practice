const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

    title:{type:String, require:true},
    stock: {type:Number, default:190},
    cost: {type:Number, require:true},
    image: {type: String, require:true},
    category: {type: String, default:"other"},
    brand: {type: String, default:"other"}


})


const Productmodel = mongoose.model("product", productSchema);

module.exports = { Productmodel}