const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


const userRoute = require('./src/routes/userRoutes')
const app = express();

app.use(express.json());

app.use('/api/user',userRoute);


mongoose.connect("mongodb+srv://gopal:5GQ0XC4THUMsEnAs@test01.lbs3l.mongodb.net/?retryWrites=true&w=majority&appName=Test01")
.then(()=>{
    console.log('connected to databse')
    app.listen(5000,()=>{
        console.log('Express application is running in port 5000');
    })
})