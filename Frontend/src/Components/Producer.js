import React, { useState, useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Forms.css';
import Navbar_top from './Shared/Navbar';
import Graph_producer from './Producer/Graph_producer'

function Producer() {

    const [form, setForm] = useState({
        username: "hotel_1", // from token
        email: "mail_1@gmail.com", // from token
        rice: 0,
        roti: 0,
        curryveg: 0,
        currynonveg: 0,
        time: 0,
    })

    const [errors, setErrors] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors)
        } else {
            // No errors! Put any logic here for the form submission!
            alert('Thank you for your feedback!')
            collectData(e);
        }
    }

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }

    const findFormErrors = () => {
        const { rice, roti, curryveg, currynonveg, time } = form
        const newErrors = {}
        // qty. of food errors
        if (roti < 10) newErrors.roti = 'Invalid Entry!'
        if (rice < 1) newErrors.rice = 'Invalid Entry!'
        if (curryveg < 1) newErrors.curryveg = 'Invalid Entry!'
        if (currynonveg < 1) newErrors.currynonveg = 'Invalid Entry!'
        // Time errors
        if (!time || time == "0") newErrors.time = 'Invalid Entry!'
        return newErrors
    }

    const collectData = async event => {
        event.preventDefault()
        console.log(
            form.rice,
            form.roti,
            form.curryveg,
            form.currynonveg,
            form.time)
        try {
            const response = await fetch('http://localhost:5000/api/producer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: form.username,
                    email: form.email,
                    rice: form.rice,
                    roti: form.roti,
                    curryveg: form.curryveg,
                    currynonveg: form.currynonveg,
                    time: form.time
                })
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Navbar_top/>

        <div className="Formbox">
            <div className='Formbox-Container'>
                <h3>Today's Food Updates</h3>
                <Form className="Form-holder">
                    <Form.Group className="mb-3" controlId="formBasicRice">
                        <Form.Label>Rice</Form.Label>
                        <Form.Control required type="number" placeholder="Quantity of Rice(in kg)" onChange={e => setField('rice', e.target.value)} isInvalid={!!errors.rice} />
                        <Form.Control.Feedback id="invalid-feedback" type="invalid">
                            Invalid Entry!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRoti">
                        <Form.Label>Roti</Form.Label>
                        <Form.Control required type="number" placeholder="Number of Roti(in kg)" onChange={e => setField('roti', e.target.value)} isInvalid={!!errors.roti} />
                        <Form.Control.Feedback id="invalid-feedback" type="invalid">
                            Invalid Entry!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCurryVeg">
                        <Form.Label>Curry(VEG)</Form.Label>
                        <Form.Control required type="number" placeholder="Quantity of Curry(VEG)" onChange={e => setField('curryveg', e.target.value)} isInvalid={!!errors.curryveg} />
                        <Form.Control.Feedback id="invalid-feedback" type="invalid">
                            Invalid Entry!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCurryNonveg">
                        <Form.Label>Curry(NON-VEG)</Form.Label>
                        <Form.Control required type="number" placeholder="Quantity of Curry(NON-VEG)" onChange={e => setField('currynonveg', e.target.value)} isInvalid={!!errors.currynonveg} />
                        <Form.Control.Feedback id="invalid-feedback" type="invalid">
                            Invalid Entry!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={e => setField('time', e.target.value)}
                            className="select-city" aria-label="City">
                            <option value="0">Select time slot</option>
                            <option value="6 to 7 pm">6 to 7 pm</option>
                            <option value="7 to 8 pm">7 to 8 pm</option>
                            <option value="8 to 9 pm">8 to 9 pm</option>
                            <option value="9 to 10 pm">9 to 10 pm</option>
                            <option value="10 to 11 pm">10 to 11 pm</option>
                        </Form.Control>
                        <Form.Control.Feedback id="invalid-feedback" type="invalid">
                            Invalid Entry!
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Button className="submit-button" onClick={handleSubmit} type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
        <Graph_producer/>
        </div>
    )
}
export default Producer