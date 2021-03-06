import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

class Dashbord extends Component {
  state = {};
  render() {
    return (
      <Navbar style={{ height: 40 }} bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">BlogMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <AssignmentIndIcon style={{ color: "white", fontSize: 25 }} />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}



export default Dashbord;