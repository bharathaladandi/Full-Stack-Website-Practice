const {Router} = require("express");

const ProductRouter = Router();

const {Productmodel} = require("../models/product.model");



//GET Method 

ProductRouter.get("/" , async (req, res) => {

try{

    const getProduct = await Productmodel.Find()

    res.send(getProduct)
}
catch(e){

    res.status(400).send(e.message);
    console.log(e.message);
}
})


module.exports = {ProductRouter}