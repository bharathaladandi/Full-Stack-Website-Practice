const { Router } = require("express");

const UserRouter = Router();

const { UserModel } = require("../models/userSchma")

// GET Method
UserRouter.get("/", async(req,res) => {

   res.send("welcome");

})

UserRouter.post("/signup", async (req, res) => {

    console.log(req.body);

    const {email, password } = req.body;

    const userPresent = await UserModel.findOne({email});

    if(userPresent?.email){

        return res.status(404),send("User Already Exits, Try another email address");

    }
    else{
        try {
            bcrypt.hash(password, 4, async function (err, hash){

                const user = new UserModel({email, password:hash})

                await user.save();

                res.send("sign up sucessfull")
            })
        } catch (error) {
            
            console.log(error.message);
        }
    }
})


UserRouter.post("/login", async(req, res) => {

    const {email, password} = req. body;

    try {

        const user = await UserModel.find({email})

        if(user.length > 0){
            const hashed_password = user[0].password;

            bcrypt.compare(password, hashed_password, function(err, result) {

                if(result){

                    const token = jwt.sign({"userID": user[0]._id}, 'hush');

                    res.send({'msg': 'Login Successfull', 'token':token});
                }
                else{
                    res.send(401).send("Login Failed");
                }
            })
        }
        else{
            res.status(404).send(`User with email ${email} not found`)
        }
        
    } catch (error) {
        console.log(error.message);
    }
})
module.exports =  {UserRouter} 