const express = require('express');
const bodyParser= require('body-parser');

const login = require('./Routes/login')

const app = express();

app.use(bodyParser.json())

app.use('/api/auth',login);

// Middleware to handle error
app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({messgae:error.messgae || 'Unknown error has occured at the server side'})
})

app.listen(3000);