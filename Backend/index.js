const express = require("express");
const connect = require("./config/db");
const { Usermodel } = require("./models/userModel");



// const {UserRouter} = require("./Routes/user.routes")
const { ProductRouter } = require("./Routes/product.routes");
const { UserRouter } = require("./Routes/user.routes");
// const { authenticate } = require("./middlewares/authentication")
const app = express();

const port = 8000;

app.use(express.json());
// app.use(authenticate)
// app.use("/users", UserRouter)

app.use("/user", UserRouter)
app.use("/product", ProductRouter)


app.get("/", (req,res) => {

    res.send("Welcome");
})


app.post("/signup", async(req, res) => {

    try{
        const data = req.body;

        const user = Usermodel(data);
    
        await user.save();

        res.send("signup successfull")
    }
    catch(e){
        console.log(e.message);
        res.send("User Already exist, Please try another email address")
    }

})

app.post("/login", (req, res) => {

    req.send("work in progess")

})
// Connecting to DB
app.listen(port, async () => {
    try {
        await connect()
        console.log("Connected to DB Successfully")

    } catch (err) {
        console.log("error while connecting to db", err);
    }
    console.log(`Listen on port ${port}`);
})
