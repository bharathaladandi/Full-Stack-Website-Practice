const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title:{type:String, require:true},
    stock: {type:Number, default:190}
})