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