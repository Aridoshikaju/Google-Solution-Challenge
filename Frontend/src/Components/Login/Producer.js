import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import '../Forms.css';
import Form from 'react-bootstrap/Form'


function Producer() {

    return(
        <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control required placeholder="Enter Name" type="text"/>
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                    Invalid Email ID.
                </Form.Control.Feedback>
            </Form.Group>
        </div>
    )
}
export default Producer