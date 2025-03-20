const passport = require("passport");
const LocalStratergy = require("passport-local").Strategy
const Person = require("./models/person")
const bcrypt = require("bcrypt")


passport.use(new LocalStratergy( async (Username,Password,done)=>{

    try {
        const user =  await Person.findOne({username:Username});
        if(!user){
            return done(null,false,{message:"Incorrect Username"})
        }
        const ismatchedPassword = user.password ===Password
        if(ismatchedPassword){
            return done(null,user);
        }else{
            return done(null,user,{message:"Incoorect Password"})
        }
    } catch (error) {
        return done(error);
    }

}))

module.exports = passport;
