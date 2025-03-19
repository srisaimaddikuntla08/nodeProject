const mongoose = require("mongoose");

const personSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        required:true,
        enum:["chef","manager","staff"]
    },
    email:{
        type:String,
        required:true,
    }
})

const Person = mongoose.model("Person",personSchema);

module.exports = Person;