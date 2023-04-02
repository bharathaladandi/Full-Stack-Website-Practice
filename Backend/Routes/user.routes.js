const { Router } = require("express");
const jwt = require("jsonwebtoken");
const UserRouter = Router();
const bcrypt = require("bcrypt");
const Usermodel = require("../models/userModel");

// GET Method
UserRouter.get("/", async (req, res) => {

    res.send("welcome");

})

UserRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        try {
            const user = await Usermodel.find({ email });
            if (user.length > 0) {

                const hashed_password = user[0].password;

                bcrypt.compare(password, hashed_password, function (err, result) {

                    if (result) {
                        const token = jwt.sign({ "userid": user[0]._id }, 'hush')
                        res.status(200).send({ msg: "Login Success", "token": token })

                    } else {
                        res.status(400).send({ "msg": "Wrong Password" })
                    }
                })




            } else {
                res.status(404).send({ "msg": "No Account Found" })
            }

        } catch (err) {
            res.status(400).send({ "msg": err.message })
        }
    } else {
        res.status(400).send({ "msg": "Email & password required" })
    }
})



// UserRouter.post("/signup",async(req,res)=>{
//     const {name,email,password}=req.body;

//     const userPresent = await Usermodel.findOne({email})
//     if(userPresent){
//         res.send("Try loggin in, already exist")
//     }
//     if(name&&email&&password){
//         try{   
//             const hashed_password=await bcrypt.hash(password,12)
//             const newdf = await Usermodel({...req.body,password:hashed_password})
//             await newdf.save();
//             res.status(200).send({"msg":"Signup Successfull"})
//         }catch(err){
//             res.status(500).send({msg:err.message})
//         }
//     }else{
//         res.status(400).send({msg:"Validation Failed"})
//     }
// })






UserRouter.get("/", (req, res) => {

    res.send("Welcome");
})


UserRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const userPresent = await Usermodel.findOne({ email })
    if (userPresent) {
        res.send("Try loggin in, already exist")
    }
    else {
        try {
            bcrypt.hash(password, 4, async function (err, hash) {
                const user = new Usermodel({ email, password: hash, firstName, lastName })
                await user.save()
                res.send("Sign up successfull")
            });

        }
        catch (err) {
            console.log(err)
            res.send("Something went wrong, pls try again later")
        }

    }


});







// UserRouter.post("/signup", async (req, res) => {

//     const data = req.body;

//     try {
//         const user = new Usermodel(data);

//         await user.save();

//         res.send("signup successfull")
//     }
//     catch (e) {
//         console.log(e.message);
//         res.send("User Already exist, Please try another email address")
//     }

// })





// UserRouter.post("/login", async (req, res) => {

//     const { email, password } = req.body;

//     try {
//         const user = await Usermodel.find({ email, password })

//         if (user.length > 0) {
//             var token = jwt.sign({ 'foo': 'bar' }, 'fullstack');
//             res.send({"msg":"Login Successfull", "token": token})

//         }
//         else {

//             res.send("Login Failed ")

//         }
//         // console.log(user);

//     } catch (error) {

//         console.log(error.message);
//         res.send("Something Went Wrong, Please try again later")
//     }
//     res.send("work in progess")

// })



// UserRouter.get("/product", (req, res){

//     const user = req.body;

//     const product = Usermodel.find(user)
//     res.send(product)
// })



//About Data
UserRouter.get("/about", (req, res) => {
    res.send("About Data");
})


//Wether Data
UserRouter.get("/weather", (req, res) => {

    const token = req.headers.authorization?.split(" ")[1]

    var decoded = jwt.verify(token, 'fullstack', (err, decoded) => {

        if (err) {
            console.log(err);
            res.send("Please Login Again")
        }
        else if (decoded) {
            console.log(decoded);
            res.send("Weather Data............")
        }
    });
})



// Purchase Data
UserRouter.get("/purchase", (req, res) => {

    const token = req.headers.authorization?.split(" ")[1]

    var decoded = jwt.verify(token, 'fullstack', (err, decoded) => {

        if (err) {
            console.log(err);
            res.send("Please Login Again")
        }
        else if (decoded) {
            console.log(decoded);
            res.send("Purchase Data............")
        }
    });
})



// Contact Data
UserRouter.get("/contact", (req, res) => {
    res.send("Contact Data");
})

module.exports = { UserRouter } 