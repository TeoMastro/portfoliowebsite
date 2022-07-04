import React from "react";
import { Nav,Navbar,Container } from "react-bootstrap";
import "./App.css"

function NavBarMenu(){
  return(
    <Navbar className="NavBarCustom">
    <Container>
    <Navbar.Brand href="#home">TeoMastro</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBarMenu;