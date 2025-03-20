const express = require('express')
const app = express();
 const PORT = 3000
const bodyParser = require("body-parser")
const {connectToMongoDB} = require("./db")
const personReq = require("./routes/personRoutes")
const menuReq = require("./routes/menuRoutes")
const passport = require("./auth")



// mongodb connection
connectToMongoDB(process.env.MONGO_URL)
.then(()=>console.log("connected DB"))


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}))




 //intializing passportMiddlware
app.use(passport.initialize());        
const localAuthetication= passport.authenticate("local",{session:false})



//empty route
app.get("/", (req,res)=>{
    res.send("welcome to hotel")
})




app.use("/person",[localAuthetication],personReq)
app.use("/menu",menuReq)

  
app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`); 
})