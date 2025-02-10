const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    EmailAddress:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
    },
    Phonenumber:{
        type:String,
        required:true,
    },

})

const users = mongoose.model("users",userSchema)
module.exports = users