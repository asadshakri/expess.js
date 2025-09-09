const express = require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('List of orders');
})
router.post('/',(req,res)=>{
    res.send('Create a new order');
})

module.exports=router;