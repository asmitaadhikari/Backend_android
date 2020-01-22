const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const userRouter = require('./routes/users');
const dotenv = require('dotenv').config();
const auth = require('./auth');
const cors = require('cors');

const app = express();
app.options('*', cors());
//app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.URL,{ useNewUrlParser:true,useUnifiedTopology:true, useFindAndModify: false, useCreateIndex:true })
.then((db)=>{
    console.log("Successfully connected to MongoDB Server");
},(err) =>console.log(err));


app.use('/users', userRouter);
app.use(auth.verifyUser);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});