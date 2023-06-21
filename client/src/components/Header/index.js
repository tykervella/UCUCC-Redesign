import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "./components/logo.png";

const CustomNavbar = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="text-white mb-4 py-3 mt-100"
      id="custom-navbar"
      style={{ backgroundColor: "#5271ff", color: "#ffffff" }}
    >
      <Navbar.Brand id="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "175px" }}
          />
        </Link>
      </Navbar.Brand>

      <Container id="dropdown-titles">
        <NavDropdown title="About Us" id="nav-dropdown-about-us" className="nav-dropdown" >
          <div className="dropdown-items-container">
            <NavDropdown.Item as={Link} to="#">
              General Information
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#">
              Rates & Fees
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#">
              Careers
            </NavDropdown.Item>
          </div>
        </NavDropdown>

        <NavDropdown title="Enrollment" id="nav-dropdown-enrollment" className="nav-dropdown">
          <div className="dropdown-items-container">
            <NavDropdown.Item as={Link} to="#">
              Schedule a Tour
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#">
              Waitlist
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#">
              Forms
            </NavDropdown.Item>
          </div>
        </NavDropdown>

        <NavDropdown title="Classrooms" id="nav-dropdown-classrooms" className="nav-dropdown">
          <div className="dropdown-items-container">
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
          </div>
        </NavDropdown>

        <NavDropdown title="Resources" id="nav-dropdown-resources" className="nav-dropdown">
          <div className="dropdown-items-container">
            <NavDropdown.Item as={Link} to="#">
              Menus
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#">
              Days Closed
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#">
              FAQs
            </NavDropdown.Item>
          </div>
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

