const mongoose = require('mongoose');


const reminder = mongoose.model('reminder',{
    user: {
        type: String
    },
    name: {
        type: String
    },
    date: {
        type: String
    },
   time:{
    type:String
   },
    notesSchema:{
        type:String
    },
    location:{
        type:String
    },
    ReminderType:{
        type:String
    }
});

module.exports = reminder