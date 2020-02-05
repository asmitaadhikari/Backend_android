const express=require('express');
const reminder=require('../models/reminder');
const mongoose=require('mongoose');
const router=express.Router();



/*
router.route('/')
.get((req,res,next)=>{
    reminder.find({author:req.user_id})
    .then((reminder)=>{
        res.json(reminder);
    }).catch((err)=>next(err));
})
.post('/addreminder',function(req,res,next){
   reminder.create(req.body)
   .then((rem)=>{
       res.statusCode = 201;
       res.json(rem);
   })
})
.put((req,res,next)=>{
    res.statuscode=405;
    res.json({message:"Method not supported"});
})


.delete((req,res,next)=>{
    reminder.deleteMany({author:req.user_id})
    .then((reply)=>{

    }).catch(next);

});
*/
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