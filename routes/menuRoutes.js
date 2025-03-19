const express = require("express");
const router = express.Router();
const { handleMenuGet, handleMenuPost,handleUpdate,handleDelete} = require("../controllers/menuItem");



router.get("/",handleMenuGet);
router.post("/",handleMenuPost);
router.patch("/:id",handleUpdate)
router.delete("/:id",handleDelete)


module.exports = router;


