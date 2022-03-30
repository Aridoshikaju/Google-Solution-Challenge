import React from 'react'
import { useState } from 'react'
import {Button, Container} from 'react-bootstrap'

function Login() {
    const [is_Loged,setLogin] = useState(false);
    let login_button;
    if (is_Loged)
    {
        login_button="Hello"
    }
    else
    {
        login_button="Login"
    }
    return (
    <div>
        <Container fluid>

    <Button variant="primary" size="sm" active onClick={()=> setLogin(true)}>{login_button}</Button>{' '}
    <Button variant="primary" size="bg" active>Donate</Button>
        </Container>
    </div>
  )
}

export default Login
