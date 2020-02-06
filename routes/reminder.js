const express=require('express');
const reminder=require('../models/reminder');
const mongoose=require('mongoose');
const router=express.Router();




router.post('/addevent', function(req, res){   
    console.log(req.body);
    const mydata = new reminder(req.body)
    mydata.save().then(function(){
    res.send('show event sucessful')
    }).catch(function(e){
    res.send(e)
    
    }) 
    })


    
    
    
module.exports = router;