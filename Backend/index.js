const express = require("express");
const connect = require("./config/db");
const { UserRouter } = require("./Routes/user.routes");



// const {UserRouter} = require("./Routes/user.routes")
// const { ProductRouter } = require("./Routes/product.routes");
// const { UserRouter } = require("./Routes/user.routes");
// const { authenticate } = require("./middlewares/authentication")
const app = express();

const port = 8000;

app.use(express.json());
// app.use(authenticate)
// app.use("/users", UserRouter)

app.use("/users", UserRouter)
// app.use("/product", ProductRouter)







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



