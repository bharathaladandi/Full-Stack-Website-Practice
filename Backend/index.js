const express = require("express");
const connect = require("./config/db");

const { UserModel } = require("./models/userSchma")

// const {UserRouter} = require("./Routes/user.routes")
const { ProductRouter } = require("./Routes/product.routes")
// const { authenticate } = require("./middlewares/authentication")
const app = express();

const port = 8000;

app.use(express.json());
// app.use(authenticate)
// app.use("/users", UserRouter)
app.use("/product", ProductRouter)




// GET Method
// app.get("/", async(req, res) => {
    
//     await res.send("Welcome");
// })



// app.post("/signup", async (req, res) => {

//     console.log(req.body);

//     const payload = req.body;

//     // const userPresent = await UserModel.findOne({email});

//     // if(userPresent?.email){

//     //     return res.status(404),send("User Already Exits, Try another email address");

//     // }
//     // else{
//         try {
//             // bcrypt.hash(password, 4, async function (err, hash){

//                 const user = new UserModel(payload)

//                 await user.save();

//                 res.send("sign up sucessfull")
//             // })
//         } catch (error) {
            
//             console.log(error.message);
//         }
//     // }
// })


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
