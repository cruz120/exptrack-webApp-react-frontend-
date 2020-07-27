import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

class AppNav extends Component {
    state = {  }
    render() { 
        return (
          <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/">
                Expenses Tracker Application
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/home/">Home</Nav.Link>
                  <Nav.Link href="/categories">Categories</Nav.Link>
                  <Nav.Link href="/expenses">Expenses</Nav.Link>
               
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                 
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Logga In</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">Skapa Konto</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>{" "}
          </div>
        );
    }
}
 
export default AppNav;