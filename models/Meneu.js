const mongoose = require('mongoose');

const menuItemschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        enum:["bitter","sour","sweet"],
    },
    is_drink:{
        type:Boolean,
        default:false,
         
    },
    ingridents:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
})

const MenuItem = mongoose.model('MenuItem',menuItemschema);

module.exports = MenuItem;