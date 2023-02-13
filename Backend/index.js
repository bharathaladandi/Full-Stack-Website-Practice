const express = require("express");
const {connect} = require("./config/db");

const {UserRouter} = require("./Routes/userosi")
const { authenticate } = require("./middlewares/authentication")
const app = express();

const port = 8000;

app.use(express.json());
app.use(authenticate)
app.use("/users", UserRouter)

// app.get("/", (req, res) => {
//     res.send("Welcome")
// })


app.get("/", async(req, res) => {
    
    await res.send("Welcome");
})


app.listen(port, async () => {
    try {
        await connect
        console.log("Connected to DB Successfully")

    } catch (err) {
        console.log("error while connecting to db", err);
    }
    console.log(`Listen on port ${port}`);
})
