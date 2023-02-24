const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {

        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, default: "user" },
    },

    {
        versionKey: false,
        timeseries: true,
    });

const Usermodel = mongoose.model("user", userSchema)

module.exports = { Usermodel }  
