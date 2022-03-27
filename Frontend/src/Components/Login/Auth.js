import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Auth.css";
import Form from "react-bootstrap/Form";
// import Producer from './Login/Producer';

function Auth() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [whoSignup, setWhoSignup] = useState(true);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    Phone_no: "",
    id: "",
  });
  const [providerConsumerDetails, setproviderConsumerDetails] = useState({
    hotel_name: "",
    owner_name: "",
    pincode: "",
    Phone_no: "",
    password: "",
  });
  // true means it's the consumer
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } 
    else 
    {

    try{
        if(isLoginMode)
        {
            const response = await fetch('https://localhost:5000/api/user/signup',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...loginDetails
                })
            });
        }
        else
        {
            whoSignup?():()
        }
    }
    catch (err){
        console.log(err)
    }
    }
  };

  const setField = (bool, field, value) => {
    if (bool) {
      setSignupDetails({
        ...signupDetails,
        [field]: value,
      });
    } else {
      setproviderConsumerDetails({
        ...providerConsumerDetails,
        [field]: value,
      });
    }
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  // const decideUserType = (typeFlag) => {
  //     let isConsumer = typeFlag
  //     if (isConsumer) {
  //         return (
  //           <div>
  //             <div>
  //               {/* <Consumer /> */}
  //             </div>
  //           </div>
  //         );
  //       } else {
  //         return (
  //           <div>
  //             <Producer />
  //           </div>
  //         );
  //       }
  // }
  const findFormErrors = () => {
    const { email_id, passwd } = isLoginMode;
    const { name } = signupDetails;
    const newErrors = {};
    // name errors
    if (!name || name == "" || name <= 0) newErrors.name = "Invalid Entry!";
    // email id errors
    if (!email_id || email_id == "" || email_id <= 0)
      newErrors.email_id = "Invalid Entry!";
    else if (email_id > 30)
      newErrors.email_id = "Too many people! (Max size = 30)";
    // password errors
    if (!passwd || passwd.length != 6) newErrors.passwd = "Invalid Password";

    return newErrors;
  };
  const Title = isLoginMode ? "Login" : "Sign Up";

  console.log(isLoginMode, loginDetails, signupDetails, Title);

  return (
    <div className="Formbox">
      <div className="Formbox-Container">
        <h3>{Title}</h3>
        <Form classname="Form-holder">
            <div style={{display: "none"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{whoSignup}</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Email"
                  type="email"
                  onChange={(event) => {
                    setLoginDetails({
                      ...loginDetails,
                      email: event.target.value,
                    });
                  }}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Invalid Email ID.
                </Form.Control.Feedback>
              </Form.Group> 
              </div>           
          {isLoginMode ? (
            <>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Email"
                  type="email"
                  onChange={(event) => {
                    setLoginDetails({
                      ...loginDetails,
                      email: event.target.value,
                    });
                  }}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Invalid Email ID.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Password"
                  type="password"
                  onChange={(event) => {
                    setLoginDetails({
                      ...loginDetails,
                      password: event.target.value,
                    });
                  }}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  UserName Password Don't Match.
                </Form.Control.Feedback>
              </Form.Group>
            </>
          ) : whoSignup ? (
            <>
              <Form.Group className="mb-3" controlId="formBasicpasswd">
                <Form.Label>User Type</Form.Label>
                <Form.Control as="select" onChange={(event)=>{
                    console.log(event.target.value);
                    setWhoSignup(!whoSignup);
                    // if (event.target.value == "Producer") {
                    //     console.log("Hello");
                    //         setWhoSignup(false);
                    //   }
                    //   if (event.target.value == "Consumer") {
                    //     console.log("Hello this is 2");
                    //           setWhoSignup(true);
                    //   }
                }} className="select-city" aria-label="City">
                  <option value="Consumer">Consumer</option>
                  <option value="Producer">Producer</option>
                  <Form.Control
                    required
                    placeholder="Consumer"
                    isInvalid={!!errors.type}
                  />
                  <Form.Control.Feedback
                    id="invalid-feedback"
                    type="invalid"
                  ></Form.Control.Feedback>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Name"
                  type="text"
                  onChange={(e) => setField(true, "name", e.target.value)}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Enter Valid Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Email"
                  type="text"
                  onChange={(e) => setField(true, "email", e.target.value)}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Invalid Email ID.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Age"
                  type="number"
                  onChange={(e) => setField(true, "age", e.target.value)}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Enter Valid Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Age"
                  type="number"
                  onChange={(e) => setField(true, "Phone_no", e.target.value)}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Enter Valid Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Idetification Proof</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Identifation No."
                  type="number"
                  onChange={(e) => setField(true, "id", e.target.value)}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Enter Valid Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setField(true, "password", e.target.value)}
                  id="passwd"
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Please provide a valid passwd.
                </Form.Control.Feedback>
              </Form.Group>
            </>
          ) : (
            <>
              <Form.Group className="mb-3" controlId="formBasicpasswd">
                <Form.Label>User Type</Form.Label>
                <Form.Control as="select" onChange={(event)=>{
                    console.log(event.target.value);
                    setWhoSignup(!whoSignup);
                    // if (event.target.value == "Producer") {
                    //     console.log("Hello");
                    //         setWhoSignup(true);
                    //   }
                    //   if (event.target.value == "Consumer") {
                    //     console.log("Hello this is 2");
                    //           setWhoSignup(false);
                    //   }
                }} className="select-city" aria-label="City">
                  <option value="1">Consumer</option>
                  <option value="2">Producer</option>
                  <Form.Control
                    required
                    placeholder="Consumer"
                    isInvalid={!!errors.type}
                  />
                  <Form.Control.Feedback
                    id="invalid-feedback"
                    type="invalid"
                  ></Form.Control.Feedback>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Hotel Name"
                  type="text"
                  onChange={(e) =>
                    setField(false, "hotel_name", e.target.value)
                  }
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Enter Valid Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  onChange={(e) =>
                    setField(false, "owner_name", e.target.value)
                  }
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Enter Valid Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Pin Code"
                  type="number"
                  onChange={(e) => setField(false, "pincode", e.target.value)}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Enter Valid Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Age"
                  type="number"
                  onChange={(e) => setField(false, "Phone_no", e.target.value)}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Enter Valid Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setField(false, "password", e.target.value)}
                  id="passwd"
                />
                <Form.Control.Feedback id="invalid-feedback" type="invalid">
                  Please provide a valid passwd.
                </Form.Control.Feedback>
              </Form.Group>
            </>
          )}
          <Button
            className="submit-button"
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </Button>
          <Button inverse onClick={() => setIsLoginMode(!isLoginMode)}>
            SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Auth;
