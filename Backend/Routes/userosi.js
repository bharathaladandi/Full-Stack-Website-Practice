const { Router } = require("express");

const bcrypt = require("bcrypt");
const UserRouter = Router();

const { UserModel } = require("../models/userSchma")



UserRouter.use("/signup", async (req, res) => {

    console.log(req.body);

    let { email, password } = req.body;

    try {

        let userPresent = await UserModel.findOne({ email });

        if (userPresent?.email) {
            return res.status(404).send("Already Exits Try Another Email Address");
        }
        else {
            try {

                bcrypt.hash(password, 4, async function (err, hash) {

                    const user = new UserModel({ email, password: hash })

                    await user.save();

                    res.send("Sign up sucessfully")
                })

            } catch (error) {

                console.log(err);

                res.send("Something went wrong, Please try again later")
            }

        }

    } catch (error) {

        console.log("Not Able to Signup");
        res.status(500).send(error.message);
    }
})


UserRouter.post("/login" , async (req, res) => {

    const {email, password} = req.body;

    try {

        const user = await UserModel({email});

        if(user.length > 0){

            const hashed_password = user[0].password;

            bcrypt.compare(password, hashed_password, function(err, result){

                if(result) {

                    const token = jwt.sign({"userID": user[0]._id}, 'hush');

                    res.send({"msg": "Login successfully", "token": token})
                }
                else {
                    res.send("Login failed");
                }
            })
        }
        
    } catch (error) {
        console.log(error);

        res.send("Something went wrong, Please try again later")
    }

})


module.exports = { UserRouter}