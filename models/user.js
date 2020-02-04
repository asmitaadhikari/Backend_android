const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        
    },
    lname: {
        type: String,
    
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    password: {
        type: String,
        required: true
    }
    ,
    image: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);