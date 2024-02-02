import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import CartContext from '../store/CartContext';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const cartCtx=useContext(CartContext)
    return (
        <Navbar expand="lg" className="bg-dark text-light ">
          <Container fluid className='mx-0'>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse as={Row} id="basic-navbar-nav" className='mx-0'>
              <Nav as={Col}  className="mx-0 fs-5 ">
                <Link to="/" className='text-light mx-2 link-underline-dark' >Home</Link>
                <Link to="/" className='text-light mx-2 link-underline-dark'>Store</Link>
                <Link to="/about" className='text-light ms-2 me-auto link-underline-dark'>About</Link>
              </Nav>
                <Button onClick={props.show} as={Col} xs={1} variant='secondary' className='text-white fw-medium ms-auto me-0'>Cart {cartCtx.amount}</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Header