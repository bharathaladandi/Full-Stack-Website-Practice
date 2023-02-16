// const { Router } = require("express");

// const UserRouter = Router();

// const { UserModel } = require("../models/userSchma")

// // GET Method

// UserRouter.get("/", async (req, res) => {

//     try {

//         const getUser = await UserModel.Find();

//         res.send(getUser);
        
//     } catch (error) {
        
//         console.log(error);

//         res.status(400).send(error.message);
//     }
// });





// // GET  By Id Request

// UserRouter.get("/:id", async (req, res) => {

//     try {

//         let id= req.params._id;

//         let SpecificUser = await UserModel.findById(id);

//         if(!SpecificUser){

//             res.send("User Not Found")
//         }
//         else{

//             res.send(SpecificUser);
//         }
        
//     } catch (error) {
        
//         console.log(error);

//         res.status(400).send(error.message);
//     }
// });



// // POST Method
// UserRouter.post("/create" , async (req, res) => {

//     const payload = req.body
  
//     try{
//         const userSpc = new UserModel(payload)
//         await userSpc.save()
//         res.send({"msg" : "Note created successfully"})
//     }
//     catch(err){
//         console.log(err)
//         res.send({"err" : "Something went wrong"})
//     }
// })



// // POST Movies
// UserRouter.post("/", async (req, res) => {

//     const movie = await new User(req.body);
//     movie.save((err, success) => {

//         if (err) {
//             return res.status(501).send({ message: "Something went wrong while saving to db" });

//         }


//         res.status(201).send(success);

//     })
// });



// // DELETE Method
// UserRouter.delete("/:id", async (req, res) => {

//     try {

//         let id= req.params._id;

//         let SpecificUser = await UserModel.findByIdAndDelete(id);

//         if(SpecificUser){

//             res.send("User Delete Sucessfully")
//         }
//         else{

//             res.send("User Not Found")
//         }
        
//     } catch (error) {
        
//         console.log(error);

//         res.status(404).send(error.message);
//     }
// });

// module.exports =  {UserRouter} 