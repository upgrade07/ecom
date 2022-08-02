import Container from "react-bootstrap/Container";
import '../App.css'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
function Navbarcomp() {
  const state = useSelector((state)=>state.handleCart)
  return (
    <Navbar className="navbar sticky-top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <h1>Deluxe.</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 py-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse><Nav.Link href="/">Home</Nav.Link></Navbar.Collapse>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="buttons">
          
            <a href="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"> Login</i>
            </a>
            <a href="/register" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"> Register</i>
            </a>
            <a href="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"> Cart ({state.length})</i>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;
