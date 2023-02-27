const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({

});

const AddressModel = mongoose.model("address", AddressSchema);

module.exports = AddressModel;