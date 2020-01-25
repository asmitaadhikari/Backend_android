const express=require('express');
const reminder=require('../models/reminder');

const router=express.Router();

router.router('/')
.get((req,res,next)=>{
    reminder.find({author:req.user_id})
    .then((reminder)=>{
        res.json(reminder);
    }).catch((err)=>next(err));
})
.post((req,res,next)=>{
    let reminder=new reminder(req.body);
    reminder.author =req.user_id;
    reminder.save()
    .then((reminder)=>{
        res.statuscode=201;
        res.json(reminder);
    }).catch(next);
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
module.exports = mongoose.model('reminder', reminderSchema);