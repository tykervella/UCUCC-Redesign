import React from "react";
import { Link } from "react-router-dom";
import { Container, Modal } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const CustomNavbar = () => {


  return (
    <Container>
      <Navbar
        variant="dark"
        expand="lg"
        className="text-white mb-4 py-3 custom-navbar"
        style={{ backgroundColor: "#000000" }}
      >
  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="basic-navbar-nav">
              <NavDropdown title="About Us" className="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="#">
                  General Information
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="#">
                  Rates & Fees
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="#">
                  Careers
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>

            <Navbar.Collapse className="basic-navbar-nav">
              <NavDropdown title="Enrollment" className="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="#">
                  Schedule a Tour
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="#">
                  Waitlist 
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="#">
                  Forms
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>

            <Navbar.Collapse className="basic-navbar-nav">
              <NavDropdown title="Classrooms" className="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="#">
                  Room 237
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="#">
                  Room 241 
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="#">
                  Room 243
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="#">
                  Room 341
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="#">
                  Room 345
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>

            <Navbar.Collapse className="basic-navbar-nav">
              <NavDropdown title="Resources" className="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="#">
                  Menus
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="#">
                  Days Closed 
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="#">
                  FAQs
                </NavDropdown.Item>

                
              </NavDropdown>
            </Navbar.Collapse>
          
          
      </Navbar>
    </Container>

    
  );
};

export default CustomNavbar;
