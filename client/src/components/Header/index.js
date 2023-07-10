import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.png";

const CustomNavbar = () => {

  
  return (
    <div>
      {/* <div style={{ backgroundColor: "#ffffff", height: "30px" }}></div> */}
      <Navbar
        variant="dark"
        expand="lg"
        className="text-white mb-4 py-3 mt-100"
        id="custom-navbar"
        style={{ backgroundColor: "#5271ff", color: "#ffffff" }}
      >
        {/* <Navbar.Brand id="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "175px" }}
            />
          </Link>
        </Navbar.Brand> */}

        <Container id="dropdown-titles">
        <Navbar.Brand id="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "175px" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Our Center" id="basic-nav-dropdown nav-dropdown-about-us" className="nav-dropdown">
            {/* <div className="dropdown-items-container"> */}
              <NavDropdown.Item as={Link} to="/AboutUs">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Calendar">
                Calendar
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Menu">
                Menu
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Testimonials">
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Contact">
                Contact Us
              </NavDropdown.Item>
            {/* </div> */}
          </NavDropdown>

          <NavDropdown title="Enrollment" id="basic-nav-dropdown nav-dropdown-enrollment" className="nav-dropdown">
            {/* <div className="dropdown-items-container"> */}
              <NavDropdown.Item as={Link} to="/Enrollment">
                Enrollment Process
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/TuitionAndFees">
                Tuition & Fees
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Tours">
                Tours
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/TuitionAssistance">
                Tuition Assistance
              </NavDropdown.Item>
            {/* </div> */}
          </NavDropdown>

          <NavDropdown title="Classes/Staff" id="basic-nav-dropdown nav-dropdown-classrooms" className="nav-dropdown">
            {/* <div className="dropdown-items-container"> */}
              <NavDropdown.Item as={Link} to="/Classrooms">
                Classrooms
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Staff">
                Meet Our Staff
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Wishlists">
                Wishlists
              </NavDropdown.Item>
              
            {/* </div> */}
          </NavDropdown>

          <NavDropdown title="Resources/FAQ" id="basic-nav-dropdown nav-dropdown-resources" className="nav-dropdown">
            {/* <div className="dropdown-items-container"> */}
              <NavDropdown.Item as={Link} to="/Resources">
                Resources
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/FAQ">
                FAQs
              </NavDropdown.Item>
            {/* </div> */}
          </NavDropdown>

          <Nav.Link>
            {/* <div className="dropdown-items-container"> */}
            Join Our Team
          </Nav.Link>
          </Nav>
          <span id = "nav-right">
            <button id = "donate-button">Donate</button>
          </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;

