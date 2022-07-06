import React from "react";
import { Nav,Navbar,Container } from "react-bootstrap";
import "./App.css"

function NavBarMenu(){
  return(
    <Navbar className="NavBarCustom" fixed="top">
    <Container>
    <Navbar.Brand href="#home">TeoMastro</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Bio</Nav.Link>
      <Nav.Link href="#features">Projects</Nav.Link>
      <Nav.Link href="#pricing">CV</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBarMenu;