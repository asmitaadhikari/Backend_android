const mongoose = require('mongoose');


const reminderSchema = new mongoose.Schema({
    User: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
  
  
    notesSchema:{
        type:String,
        required:true
    },
    location:{
        type:String
    },
    ReminderType:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('Reminder', reminderSchema);