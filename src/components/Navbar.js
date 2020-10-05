import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Dr. Camila Genz</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="#home">Antendimentos</Nav.Link>
        <Nav.Link href="#link">Curriculo</Nav.Link>
        <Nav.Link href="#link">Contato</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavbarComponent;