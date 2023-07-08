import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from '../../assets/logo.png'

const CustomNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
      <Navbar
        expand="lg"
        id="custom-navbar"
        expanded={isNavOpen}
      >
          <Link to="/" id="logo-container">
            <img src={logo} id="logo-img" alt="" />
          </Link>
        
        <Container id="dropdown-titles">


          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Our Center"
                id="nav-dropdown-about-us"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/about" onClick={handleNavClose}>
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/calendar" onClick={handleNavClose}>
                  Calendar
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/menu" onClick={handleNavClose}>
                  Menu
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/testimonials" onClick={handleNavClose}>
                  Family Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact" onClick={handleNavClose}>
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Enrollment"
                id="nav-dropdown-enrollment"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/enrollment" onClick={handleNavClose}>
                  Enrollment Process
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tuition" onClick={handleNavClose}>
                  Tuition Process
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tours" onClick={handleNavClose}>
                  Tours
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tuition-assistance" onClick={handleNavClose}>
                  Tuition Assistance
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Classes & Staff"
                id="nav-dropdown-classes-and-staff"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/classrooms" onClick={handleNavClose}>
                  Classrooms
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/staff" onClick={handleNavClose}>
                  Meet our Staff
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wishlist" onClick={handleNavClose}>
                  Wishlist
                </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown
                title="Resources & Staff"
                id="nav-dropdown-resources"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/resources" onClick={handleNavClose}>
                  External Resources
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/FAQs" onClick={handleNavClose}>
                  FAQs
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Join Our Team"
                id="nav-dropdown-hiring"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/positions" onClick={handleNavClose}>
                  Open Positions
                </NavDropdown.Item>
              </NavDropdown>

                <Link to="https://www.nfggive.org/charity-list?query=UCUCC&page=1&sorted_by=relevance" className="btn" target="_blank">
                  Donate
                </Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
