import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Deportes</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Fútbol</Nav.Link>
              <Nav.Link href="#action2">Baloncesto</Nav.Link>
              <NavDropdown title="Más deportes" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Voleibol</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Tenis</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Patinaje
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    );
  }
  
  export default NavScrollExample;