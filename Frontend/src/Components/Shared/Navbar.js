import React from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import { useState } from 'react'
import LoginDonate from './Login_button'
import Logo from "./images/download.png"

function Navbar_top() {
    const [expanded,setExpand] = useState(false)
    const nab_bar_conrol = ()=>{
        if(!expanded)
        {
            setExpand("expanded");
        }
        else
        {
            setExpand(false);
        }
    }
   return (
    <div>
<Container fluid>
<Navbar bg="light" expand="lg" expanded={expanded}>
  <Container fluid>
    <Navbar.Brand href="#">
    <img
        src={Logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        />
        Navbar scroll
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" onClick={ nab_bar_conrol } />
    <Navbar.Collapse id="navbarScroll">
    <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
        <Nav.Link href="#scrool_to_top" onClick={() => setExpand(false)}>Home</Nav.Link>
        <Nav.Link href="#" style={{display: "none"}}>Conatct Us</Nav.Link>
        <NavDropdown title="Get Invloved" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3" onClick={() => setExpand(false)}>Donate Food</NavDropdown.Item>
          <NavDropdown.Item href="#action4" onClick={() => setExpand(false)}>Volentier for helping</NavDropdown.Item>
          <NavDropdown.Item href="#action5" onClick={() => setExpand(false)}>Apply for jobs</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#scrool_to_about_us" onClick={() => setExpand(false)}>About Us</Nav.Link>
        <NavDropdown title="Contact Us" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3" onClick={() => setExpand(false)}>Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4" onClick={() => setExpand(false)}>report action</NavDropdown.Item>
          <NavDropdown.Item href="#action5" onClick={() => setExpand(false)}>Something else here</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Administration" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3" onClick={() => setExpand(false)}>Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4" onClick={() => setExpand(false)}>Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action5" onClick={() => setExpand(false)}>Something else here</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    <LoginDonate/>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Container>
    </div>
  )
}

export default Navbar_top