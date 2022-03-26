import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Form.css';
function Forms() {
    return (
        <body id="body">
            <div>
                <br/>
                <h4>Provide the food requirement details below:</h4>
                <Form id="form">
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label class="label">Number of people:</Form.Label>
                                    <Form.Control type="number" id="people" name="people" min="1" class="count" /> 
                                    <Form.Text class="text"> (Approx. requirement) </Form.Text>
                                <br/><br/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label class="label">Type of food: </Form.Label>
                                    <Form.Check type="switch" id="custom-switch" label="Veg"/>
                                    <Form.Text class="text"> (Select if you prefer vegetarian food) </Form.Text>
                                    <br/><br/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <br/><br/>
                    <Form.Label class="label">Delivery Address:</Form.Label>
                    <Row>
                        <Col>
                            <Form.Group>
                                    <Form.Label class="label">Line 1:</Form.Label>
                                    <br/>
                                    <Form.Control class="address" name="line1"/>
                                    <br/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                    <Form.Label class="label">Line 2:</Form.Label>
                                    <br/>
                                    <Form.Control class="address" name="line2"/>
                                    <br/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                    <Form.Label class="label">Pin-code:</Form.Label>
                                    <br/>
                                    <Form.Control maxlength="6" pattern="[0-9]{6}" class="address" name="pin code"/>
                            </Form.Group>
                            <Form.Text class="text"> (Please provide access to your current location when prompted) </Form.Text>
                        </Col>
                        <Col>
                            <Form.Group>
                                    <Form.Label class="label">City:</Form.Label>
                                    <br/>
                                    <Form.Select class="address">
                                        <option>Select City...</option>
                                        <option>Bangalore</option>
                                        <option>...</option>
                                    </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <br/><br/>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Group>
                    <Button className='button2' variant="primary" type="submit">
                        Submit Details
                    </Button>
                    </Form.Group>
                        </Col>
                    </Row>
                  

                    {/* <Button className='Submit' >
                        Submit Details
                    </Button> */}
                    <br/><br/>
                </Form>
            </div>
        </body>
    )
}
export default Forms

