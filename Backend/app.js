const express = require('express');
const bodyParser= require('body-parser');
const {db} = require('./Database/config')

const login = require('./Routes/login')

const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

app.use('/api/auth',login);

// Middleware to handle error
app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({messgae:error.messgae || 'Unknown error has occured at the server side'})
})

const dumb={
    first:'something',
    second:'Nothing'
}

// db.collection('trial').doc('1st').set(dumb)

// db.then(()=>{
//     app.listen(3005);
// })
// .catch((err)=>{
//     console.log(err)
// })
app.listen(5000);