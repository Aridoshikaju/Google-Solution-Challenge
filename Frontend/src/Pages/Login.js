import React, { useState } from 'react'
import React from 'react'

export default function Login() {
    //logged in or not??
    const [loggedin,setLoggedin] = useState(localStorage.getItem("validation"))
    //Variable for taking details of login
    const [loginDetails,setLoginDetails] = useState({username:"",password:""})
    //for handdleing error such as wrong username or password
    const [inputError,setInputError] = useState(
        {
            username:{error:false,message:""},  
            // error set to false as there are no error during the beging 
            // if after verification error are there then the error will be set to true
            password:{error:false,message:""}
        })
    const hendleLoginInput = (key,value)=>{
        setLoginDetails({
            ...loginDetails,
            [key]:value})
        }
    const handleInputError = (key, status, message) => {
        setInputErrorHandler({
            ...inputErrorHandler,
            [key]: {
            error: status,
            message: message,}
            });
        }
        
    return (
        <div>
        
        </div>
    )
}
