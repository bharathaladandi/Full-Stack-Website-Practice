const { Router } = require("express");
const jwt = require("jsonwebtoken");
const UserRouter = Router();
const bcrypt = require("bcrypt");
const { Usermodel } = require("../models/userModel")

// GET Method
// UserRouter.get("/", async(req,res) => {

//    res.send("welcome");

// })

// UserRouter.post("/login",async(req,res)=>{
//     const {email,password}=req.body;
//     if(email&&password){
//           try{
//               const userData=await Usermodel.findOne({email});
//               if(userData?.name.length>0){
//                   const isMatch=await bcrypt.compare(password,userData.password);
  
//                   if(isMatch){
//                       const token=jwt.sign({"userid":userData._id},process.env.JWT)
//                       res.status(200).send({msg:"Login Success",token:token})
  
//                   }else{
//                       res.status(400).send({"msg":"Wrong Password"})
//                   }
  
  
//               }else{
//                   res.status(404).send({"msg":"No Account Found"})
//               }
  
//           }catch(err){
//               res.status(400).send({"msg":err.message})
//           }
//     }else{
//       res.status(400).send({"msg":"Email & password required"})
//     }
//   })



// UserRouter.post("/signup",async(req,res)=>{
//     const {name,email,password}=req.body;
//     if(name&&email&&password){
//         try{   
//             const hashed_password=await bcrypt.hash(password,12)
//             const newdf = await Usermodel({...req.body,password:hashed_password})
//             await newdf();
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

    try {
        const data = req.body;

        const user = Usermodel(data);

        await user.save();

        res.send("signup successfull")
    }
    catch (e) {
        console.log(e.message);
        res.send("User Already exist, Please try another email address")
    }

})




UserRouter.post("/login", async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await Usermodel.find({ email, password })

        if (user.length > 0) {

            res.send("Login Successfull")
            return
        }
        else {

            res.send("Login Failed ")
            return
        }
        // console.log(user);

    } catch (error) {

        console.log(error.message);
        res.send("Something Went Wrong, Please try again later")
    }
    res.send("work in progess")

})

module.exports =  {UserRouter} 