const mongoose =  require('mongoose')
require("dotenv").config();



async function connectToMongoDB(uri){
    return  await mongoose.connect(uri)
}
// URL in .env file


module.exports = {connectToMongoDB}





