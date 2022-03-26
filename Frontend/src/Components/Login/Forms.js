import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Forms.css';
import Form from 'react-bootstrap/Form'
import Producer from './Login/Producer';


function Cons_Form() {

    const [ form, setForm ] = useState({})
    const [ errors, setErrors ] = useState({})


    let userInfo = {
        name: "",
        email: "",
    }

    const handleSubmit = e => {
        e.preventDefault()
        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if ( Object.keys(newErrors).length > 0 ) {
            // We got errors!
            setErrors(newErrors)
        } else {
            // No errors! Put any logic here for the form submission!
            alert('Thank you for your feedback!')
        }
    }
    
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if ( !!errors[field] ) setErrors({
            ...errors,
            [field]: null
        })
    }

    const decideUserType = (typeFlag) => {
        let isConsumer = typeFlag
        if (isConsumer) {
            return (
              <div>
                <div>
                  {/* <Consumer /> */}
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <Producer />
              </div>
            );
          }
    }
    const findFormErrors = () => {
        const {name, email_id, passwd } = form
        const newErrors = {}
        // name errors
        if ( !name || name == '' || name <= 0) newErrors.name = 'Invalid Entry!'
        // email id errors
        if ( !email_id || email_id == '' || email_id <= 0) newErrors.email_id = 'Invalid Entry!'
        else if ( email_id > 30 ) newErrors.email_id = 'Too many people! (Max size = 30)'
        // password errors
        if ( !passwd || passwd.length !=6 ) newErrors.passwd = 'Invalid Password'
        
        return newErrors
    }
    
    let user_type = 0
    return(
        <div className="Formbox">
            <div className='Formbox-Container'>
                <h3>Sign Up</h3>
                <Form classname="Form-holder">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required placeholder="Enter Name" type="text" onChange={ e => setField('name', e.target.value) } isInvalid={ !!errors.name }/>
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                        <Form.Control.Feedback id="invalid-feedback" type="invalid">
                            Invalid Email ID.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required placeholder="Enter Email-ID" type="email" onChange={ e => setField('email_id', e.target.value) } isInvalid={ !!errors.email_id }/>
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                        <Form.Control.Feedback id="invalid-feedback" type="invalid">
                            Invalid Email ID.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Enter Password" id="passwd" />
                        <Form.Control.Feedback id="invalid-feedback" type="invalid">
                            Please provide a valid passwd.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicpasswd">
                        <Form.Label>User Type</Form.Label>
                        <Form.Select className="select-city" aria-label="City">
                        <option value="1">Consumer</option>
                        <option value="2">Producer</option>
                        <Form.Control required placeholder="Consumer" onChange={ e => decideUserType(e.target.value) } isInvalid={ !!errors.type }/>
                        <Form.Control.Feedback id="invalid-feedback" type="invalid"></Form.Control.Feedback>
                        </Form.Select>
                    </Form.Group>
                    
                    <Button className="submit-button" onClick={ handleSubmit } type="submit">
                        Submit
                    </Button>


                </Form>
            </div>
        </div>
    )
}
export default Cons_Form