const mongoose =  require('mongoose')
require("dotenv").config();

async function connectToMongoDB(uri){
    return  await mongoose.connect(uri)
}


module.exports = {connectToMongoDB}





