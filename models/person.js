const mongoose = require("mongoose");

const personSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:["chef","manager","staff"]
    },
    email:{
        type:String,
        required:true,
    },
    username:{
        required:true,
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
})

const Person = mongoose.model("Person",personSchema);

module.exports = Person;