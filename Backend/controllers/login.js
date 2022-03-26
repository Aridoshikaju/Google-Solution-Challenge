const uuid = require('uuid')
const { validationResult } = require('express-validator')

const getUsers = (req,res,next)=>{

}

const signup = (req,res,next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error('dummy error for now logic can be applied later at a point')
        error.code = 202
        next(error)
    }

    const {name, email, password} = req.body;

    //make a check if the email is already taken or not

    newUser = {
        id:uuid(),
        name,
        email,
        password,
    }

    //push the new created user to the data base

    res.status(201).json({user:newUser});
}

const login = (req,res,next)=>{
    const {email,password} = req.body;

    //furthur
    //status 401 means auth failed
}

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
