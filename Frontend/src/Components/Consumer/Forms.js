import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Forms.css';
import Form from 'react-bootstrap/Form'
// import CurrentLocation from './Consumer/location'

const handleResults = (results) => console.log(results)

const onError = (type, status) => console.log(type, status)


function Cons_Form() {

    const [ form, setForm ] = useState({
        ppl_qty: '',
        line1: '',
        line2: '',
        pin: '',
        city: '',
        gps_loc: ''
    })
    const [ errors, setErrors ] = useState({})

    const sendData = async event => {
        event.preventDefault()
        const { ppl_qty, line1, line2, pin, city } = form
        console.log(ppl_qty, line1, line2, pin, city)
        try {
            const response = await fetch('http://localhost:5000/api/consumer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ppl_qty: form.ppl_qty,
                    line1: form.line1,
                    line2: form.line2,
                    pin: form.pin,
                    city: form.city,
                })
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (err) {
            console.log(err);
        }
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
            sendData(e);
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

    const findFormErrors = () => {
        const { ppl_qty, pin, city } = form
        const newErrors = {}
        // no. of ppl errors
        if ( !ppl_qty || ppl_qty === '' || ppl_qty <= 0) newErrors.ppl_qty = 'Invalid Entry!'
        else if ( ppl_qty > 30 ) newErrors.ppl_qty = 'Too many people! (Max size = 30)'
        // pin errors
        if ( !pin || pin.length !== 6 ) newErrors.pin = 'Invalid pin'
        // city errors
        if (!city || city==='0') newErrors.city = 'Invalid City'
        
        return newErrors
    }
    
    return(
        <div className="Formbox">
            <div className='Formbox-Container'>
                <h3>Food requirements</h3>
                <Form className="Form-holder">
                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                        <Form.Label>Number of persons *</Form.Label>
                        <Form.Control required type="number" onChange={ e => setField('ppl_qty', e.target.value) } isInvalid={ !!errors.ppl_qty }/>
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                        <Form.Control.Feedback id="invalid-feedback" type="invalid">
                            Invalid Entry (Max size = 30).
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required type="text" placeholder="Line 1 *" onChange={ e => setField('line1', e.target.value) } isInvalid={ !!errors.line1 }/>
                        <Form.Control type="text" placeholder="Line 2" onChange={ e => setField('line2', e.target.value) } isInvalid={ !!errors.line2 }/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicpin">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control required type="text" pattern="[0-9]{6}" placeholder="Pincode *" onChange={ e => setField('pin', e.target.value) } isInvalid={ !!errors.pin }/>
                        <Form.Control.Feedback id="invalid-feedback" type="invalid">
                            Please provide a valid Pincode.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={e => setField('city', e.target.value)}
                            className="City"
                            isInvalid={ !!errors.city }>
                            <option value="0">Please select a city</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </Form.Control>
                        <Form.Control.Feedback id="invalid-feedback" type="invalid">
                            Please select a City!
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicLocation">
                        <Form.Label>Current Location*</Form.Label>
                        <div>
                        <CurrentLocation onFetchAddress={handleResults} onError={onError}>
                            {({ getCurrentLocation, loading }) => (
                                <button onClick={getCurrentLocation} disabled={loading}>
                                Get Current Location
                                </button>
                            )}
                        </CurrentLocation>
                        </div>
                    </Form.Group> */}

                    <Button className="submit-button" onClick={ handleSubmit } type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export default Cons_Form