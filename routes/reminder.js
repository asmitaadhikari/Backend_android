const express=require('express');
const reminder=require('../models/reminder');
const mongoose=require('mongoose');
const router=express.Router();




router.post('/addevent', function(req, res){   
    console.log(req.body);
    const mydata = new reminder(req.body)
    mydata.save().then(function(){
    res.send('event is sucessfully added')
    }).catch(function(e){
    res.send(e)
    
    }) 
    })

    router.put('/updateevent/:eventid', function(req, res){
        reminder.findOneAndUpdate({_id :req.params.eventid}, req.body).then(function(){
            res.send("Event is updated")
        }).catch(function(){ 
            res.send("error")
        }) 
    })

  
module.exports = router;