const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "le nom est requis"]
    },
    email : {
        type: String, 
        required : [true, "le mail est requis"]
    },
    age : {
        type: Number,
    },
    password: {
        type : String,
        required : [true , "le mot de passe est requis"]
    }
})

const userModel = mongoose.model("users" , userSchema)

module.exports = userModel

