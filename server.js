const express = require('express')
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser")
const {connectToMongoDB} = require("./db")
const personReq = require("./routes/personRoutes")
const menuReq = require("./routes/menuRoutes")


connectToMongoDB("mongodb://127.0.0.1:27017/hotels")
.then(()=>console.log("connected DB"))




app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}))




app.use("/person",personReq)
app.use("/menu",menuReq)

  
app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`); 
})