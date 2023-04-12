const {Router} = require("express");

const ProductRouter = Router();

const {Productmodel} = require("../models/product.model");



//GET Method 

ProductRouter.get("/all" , async (req, res) => {
try{
    const getProduct = await Productmodel.Find()
    res.status(200).send(getProduct)
}
catch(e){
    res.status(400).send(e.message);
    console.log(e.message);
}
})





// GET product based on page || category  || brand

ProductRouter.get("/", async(req, res) => {

    const { page, category, brand } = req.query;
    const perpage = (page - 1 ) * 10

    try {

        let ProductData;

        if(category){
            ProductData = await Productmodel.find({category}).skip(perpage || 0).limit(10)
        }
        else if(brand){
            ProductData = await Productmodel.find({brand}).skip(perpage || 0).limit(10)
        }
        else if(category && brand){
            ProductData = await Productmodel.find({category, brand}).skip(perpage || 0).limit(10)
        }
        else{
            ProductData = await Productmodel.find().skip(perpage || 0).limit(10)
        }

        res.status(200).send(ProductData);        
    } catch (error) {
        
        console.log(error.message);
    }
})

ProductRouter.get("/:category", async(req, res) => {

    const {limit= 10, page= 1} = req.query;

    let { category } = req.params;

    try {
        let products = await Productmodel.find({category: category}).limit(12).skip((page-1) * limit);
        
    } catch (error) {
        console.log(error.message);
    }
})

// GET product based on search and apply filter based on q && page || category || brand

ProductRouter.get("/search", async (req, res) => {

    const {q, page, category, brand} = req.query

    const perpage = (page - 1 ) * 10;

    try {

        let AllData;

        if(category){
            AllData = await Productmodel.find({title: new RegExp(q, "i"), category,}).skip(perpage || 0).limit(10)
        }
        else if(brand){
            AllData = await Productmodel.find({title: new RegExp(q, "i"), brand}).skip(perpage || 0).limit(10)
        }
        else if(category && brand){
            AllData = await Productmodel.find({title: new RegExp(q, "i"), category, brand}).skip(perpage || 0).limit(10)
        }
        else{
            AllData = await Productmodel.find({title: new RegExp(q, "i")}).skip(perpage || 0).limit(10)
        }

        res.status(200).send(AllData);
        
    } catch (error) {
        
        console.log(error.message);
    }
})


module.exports = {ProductRouter}