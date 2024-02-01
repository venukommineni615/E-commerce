import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
const Header = (props) => {
    return (
        <Navbar expand="lg" className="bg-dark text-light ">
          <Container fluid className='mx-0'>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse as={Row} id="basic-navbar-nav" className='mx-0'>
              <Nav as={Col}  className="mx-0 fs-5 ">
                <Nav.Link href="#home" className='text-light '>Home</Nav.Link>
                <Nav.Link href="#store" className='text-light'>Store</Nav.Link>
                <Nav.Link href="#about" className='text-light me-auto'>About</Nav.Link>
              </Nav>
                <Button onClick={props.show} as={Col} xs={1} variant='secondary' className='text-white fw-medium ms-auto me-0'>Cart</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Header