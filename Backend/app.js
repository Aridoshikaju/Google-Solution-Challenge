const express = require('express');
const cors = require('cors')
const bodyParser= require('body-parser');
const {db} = require('./Database/config')

const app = express();


const login = require('./Routes/login')
const producer = require('./Routes/producer')
const producerload = require('./Routes/producerload')




app.use(bodyParser.json())

app.options('*', cors()) // include before other routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader("Access-Control-Allow-Headers", "X-Token")
  next();
});


app.use('/api/auth',login)
app.use('/api/producerload',producerload);
app.use('/api/producer',producer);

// Middleware to handle error
app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({messgae:error.messgae || 'Unknown error has occured at the server side'})
})

app.listen(5000);
console.log("Listening at port 5K")