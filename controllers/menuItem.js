const MenuItem = require("../models/Meneu")


async function handleMenuGet(req,res){

    try{
        const menuitems = await MenuItem.find();
        res.json(menuitems)
       }
       catch(err){
         
             console.log(err)
             return res.status(400).json({msg:"badReques"})
     
         
       }
    
}

async function handleMenuPost(req,res){
    try{
        const body = req.body;
        const newMenu =  new MenuItem(body);
    
        await newMenu.save();
    
        res.status(200).json({msg:"sucess"})
    }
    catch(err){
        if(err){
            console.log(err)
            return res.status(400).json({msg:"badReq"})
        }
    }
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
    const menuId = req.params.id
    const body = req.body

   await MenuItem.findByIdAndUpdate(menuId,body)

   res.status(200).json({msg:"menuUpdated"})

}

async function handleDelete(req,res){
    const menuId = req.params.id
    const body = req.body;
    await  MenuItem.findByIdAndDelete(menuId,body)

    res.status(200).json({msg:"deleted"});
}



module.exports = {handleMenuGet,handleMenuPost,handleUpdate,handleDelete};