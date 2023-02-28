require("dotenv").config();
const express = require("express");
const connect = require("./config/db");


//Imports routes path
 const { UserRouter } = require("./Routes/user.routes");
 const ProductRouter = require("./Routes/product.routes");
 const CartRouter = require("./Routes/Cart.rotes");


const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 8000;

// Give query to route
app.use("/users", UserRouter);
app.use("/product", ProductRouter);
app.use("/cart", CartRouter);









// Connecting to DB
app.listen(PORT, async () => {
    try {
        await connect
        console.log("Connected to DB Successfully")

    } catch (err) {
        console.log("error while connecting to db", err);
    }
    console.log(`Listen on port ${PORT}`);
})

