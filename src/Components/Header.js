import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import CartContext from "../store/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider";
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx=useContext(AuthContext)
  const navigate=useNavigate()
  return (
    <Navbar expand="lg" className="bg-dark text-light ">
      <Container fluid className="mx-0">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse as={Row} id="basic-navbar-nav" className="mx-0">
          <Nav as={Col} className="mx-0 fs-5 ">
            <NavLink
              to="/home"
              className="text-light mx-2 link-underline-dark"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/store"
              className="text-light mx-2 link-underline-dark"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              Store
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
              className="text-light ms-2  link-underline-dark"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
              className="text-light ms-2  link-underline-dark"
            >
              Contact
            </NavLink>
            {!authCtx.isLoggedin && <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
              className="text-light ms-2 me-auto link-underline-dark"
            >
              Login
            </NavLink>}
          </Nav>
            {authCtx.isLoggedin && <Button variant="secondary" className="me-2" onClick={()=>{authCtx.logOut()
            navigate('/login')
            }}>Logout</Button>}
          <Button
            onClick={props.show}
            as={Col}
            xs={1}
            variant="secondary"
            className="text-white fw-medium ms-auto me-0"
          >
            Cart {cartCtx.amount}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
