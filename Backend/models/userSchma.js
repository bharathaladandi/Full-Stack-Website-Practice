
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email : {
        type:String, require:true, unique:true
    },
    password : {
        type:String, require:true
    },
    name : {
        type:String
    },
    age : {
        type:Number
    }
})

const UserModel = mongoose.model("user", userSchema)

module.exports = { UserModel };