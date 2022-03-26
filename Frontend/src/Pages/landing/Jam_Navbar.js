import React from "react";
import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "./images/download.png"

export default function Navbar_top() {
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
            <Navbar bg="light" expanded="lg" fixed="top" expanded={expanded}>
                <Navbar.Brand href="#">
                <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                    Headings
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" onClick={ nab_bar_conrol }/>
                <Navbar.Collapse id="navbarScroll">
                    <Container fluid>
                    <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
                        <Nav.Link href="#scrool_to_top" onClick={()=>setExpand(false)}>Home</Nav.Link>
                        <NavDropdown title="Get Invloved" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3" onClick={() => setExpand(false)}>Donate Food</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" onClick={() => setExpand(false)}>Volentier for helping</NavDropdown.Item>
                            <NavDropdown.Item href="#action5" onClick={() => setExpand(false)}>Apply for jobs</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#scrool_to_about_us" onClick={() => setExpand(false)}>About Us</Nav.Link>
                        <NavDropdown title="Contact Us" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3" onClick={() => setExpand(false)}>Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" onClick={() => setExpand(false)}>Report action</NavDropdown.Item>
                            <NavDropdown.Item href="#action5" onClick={() => setExpand(false)}>more</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Administration" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3" onClick={() => setExpand(false)}>Donate Food</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" onClick={() => setExpand(false)}>Volentier for helping</NavDropdown.Item>
                            <NavDropdown.Item href="#action5" onClick={() => setExpand(false)}>Apply for jobs</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </div>
  )
}
