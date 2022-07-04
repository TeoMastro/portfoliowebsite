import React from "react";
import { Nav,Navbar,Container } from "react-bootstrap";

function NavBarMenu(){
  return(
    <Navbar id="navCustom" bg="primary" variant="dark">
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