// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({

//     name:{
//         type: String,
//     },
//     email:{
//         type:String,
//         require: true,
//         unique:true,
//     },
//     password:{
//         type: String,
//         require: true,
//     },
//     age: {
//         type: Number,
//     }
// });

// const Users = mongoose.model('prati', UserSchema);

const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email : String,
    password : String,
    name : String,
    age : Number
})

const UserModel = mongoose.model("user", userSchema)

module.exports = { UserModel };