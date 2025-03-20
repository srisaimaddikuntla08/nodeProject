const Person = require("../models/person");
const bcrypt = require("bcrypt")



async function handlePersonReq(req,res){
    try{
        const data  =  await Person.find();
        res.status(200).json(data);
       }catch(err){
        console.log(err)
       }
     
}

async function handlePersonPost(req,res){
   const body = req.body;

   const hashespass = await  bcrypt.hash(body.password,10);
    // const newPerson =  new Person(body);

    // await newPerson.save();
    const user = await Person.create({
        name:body.name,
        age:body.age,
        email:body.email,
        username:body.username,
        password:hashespass

    })
    res.json({msg:"sucess"})
}

async function handlePersonWork(req,res){
     try{
            const workType =  req.params.workType
            if(workType =="manager"||workType =="chef"||workType =="staff"){
                const response =  await Person.find({work:workType})
                res.status(200).json(response)
            }
    
           
        }catch(err){        
                console.log(err)
                res.status(400).json({msg:"badreq"})
        }
}

async function handleUpdate(req,res){

    try {
        const personId= req.params.id;
      const UpdatedId=  await Person.findByIdAndUpdate(personId,{
       name : req.body.name,
       age:req.body.age,
       email:req.body.email,     
        work:req.body.work
})
if(!UpdatedId){
    res.status(404).json({msg:"UpdatedFailed"})
}

res.status(200).json({msg:'updated'})
        
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:"invalid"})
    } 

}

async function handleDelete(req,res) {
    const personId = req.params.id;
    const deleteId = req.body
    await Person.findByIdAndDelete(personId,deleteId)
    res.status(200).json({msg:"deleted"})
}


module.exports= {handlePersonReq,handlePersonPost,handlePersonWork,handleUpdate,handleDelete}