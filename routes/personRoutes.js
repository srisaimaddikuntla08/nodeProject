const express = require("express");
const router = express.Router();
const{handlePersonWork,handlePersonPost,handlePersonReq,handleUpdate, handleDelete} =require("../controllers/person")


router.get("/",handlePersonReq)
router.post("/",handlePersonPost)
router.get("/:workType",handlePersonWork)
router.patch("/:id",handleUpdate)
router.delete("/:id",handleDelete)




   

  

module.exports = router;

