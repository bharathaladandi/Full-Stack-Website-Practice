const express = require("express");

const Cart = require("../models/Cart.module");


const app = express.Router();


app.get("/", async(req, res) => {

    try {
        
        let cart = await Cart.find();

        res.status(200).send(cart);

    } catch (error) {
        console.log(error.message);
    }

});


app.post("/", async(req, res) => {

    try {

        let cart = new Cart.create(req.body);

        res.status(200).send(cart);

        console.log("Post Cart Successfull");
        
    } catch (error) {
        
        console.log(error.message);
    }

});

module.exports = app;