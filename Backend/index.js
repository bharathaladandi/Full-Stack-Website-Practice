const express = require("express");
const connect = require("./config/db");
const { UserRouter } = require("./Routes/user.routes");
 const ProductRouter = require("./Routes/product.routes");
 const CartRouter = require("./Routes/Cart.rotes");


// const {UserRouter} = require("./Routes/user.routes")
// const { ProductRouter } = require("./Routes/product.routes");
// const { UserRouter } = require("./Routes/user.routes");
// const { authenticate } = require("./middlewares/authentication")
const app = express();
app.use(express.json());
app.use(cors());


const port = 8000;


app.use("/users", UserRouter);
app.use("/product", ProductRouter);
app.use("/cart", CartRouter);









// Connecting to DB
app.listen(port, async () => {
    try {
        await connect
        console.log("Connected to DB Successfully")

    } catch (err) {
        console.log("error while connecting to db", err);
    }
    console.log(`Listen on port ${port}`);
})




const express = require("express");

const cors = require("cors");



