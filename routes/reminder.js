const express=require('express');
const reminder=require('../models/reminder');
const mongoose=require('mongoose');
const router=express.Router();


router.post('/addevent', function(req, res){   
    console.log(req.body);
    const mydata = new reminder(req.body)
    mydata.save()
    .then(function(){
    res.send('event is sucessfully added')
    })
    .catch(function(e){
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


    router.delete('/deleteevent/:eventid',require("../auth").verifyUser, function(req, res){
        console.log(req.params.eventid);
        reminder.findByIdAndDelete(req.params.eventid).then(function(){
            res.send("Event is deleted")
        }).catch(function(){ 
            res.send(e)
        })
        })
     

            router.get('/selectevent', function(req, res,next){
                reminder.find({})
                .then((Reminder)=>{
                    res.json(Reminder);

                }).catch(next);
            }
        );
  
 module.exports = router;