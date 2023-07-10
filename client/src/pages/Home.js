import React from 'react';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import banner from "../assets/banner.jpg";
import kidsPlaying from "../assets/kids-playing.jpg"
import LooksIcon from '@mui/icons-material/Looks';
import MoodIcon from '@mui/icons-material/Mood';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';



const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/calendar");
  };



  return (
    <main>
      <Container >

        <Row style={{display:"flex", justifyContent: "space-between"}}> 
          <Col md={3} style={{ backgroundColor: "#F9643F", color: "whitesmoke", paddingTop: "10px", textAlign: "center" }}>
           
            <h2 style={{textDecoration: "underline"}}>Welcome To</h2>
            <h2> UCUCC </h2>
            <h2> Child Care</h2>
            <h2> Programs</h2>
          </Col>
          <Col md={9}>
            <img src={kidsPlaying} alt="A group of kids play tug-o-war, all are laughing" style={{ width: "100%", height: "100%", align: "right" }}/>
          </Col> 
        </Row>

        <br />

        <Row style={{display:"flex", justifyContent: "space-between"}}>
          <Col md = {3} className="home-infobox">
          <LooksIcon fontSize = "large" style = {{margin: "5px"}}/>
                <h3>Our Approach</h3>
                <hr></hr>
                <p>UCUCC Child Care Programs provides a places where all families are welcome and supported</p>
                <button>Read More</button>
          </Col>

          <Col md = {3} className="home-infobox">
            <MoodIcon fontSize = "large" style = {{margin: "5px"}}/>
          <h3>Our Children</h3>
                <hr></hr>
                <p>We are a fully licensed childcare program serving children ages 12 months and up until they start Kindergarten</p>
                <button>Read More</button>
          </Col>

          <Col md = {3} className="home-infobox">
            <ContactEmergencyOutlinedIcon fontSize = "large" style = {{margin: "5px"}}/>
          <h3>Contact Us</h3>
          <hr></hr>
          <div className = "contact-block">
          <LocalPhoneOutlinedIcon/>
          <p>206-524-3400</p>
          </div>

          <div className = "contact-block">
          <EmailOutlinedIcon/>
          <p>office@childlearning.org</p>
          </div>

          <div className = "contact-block">
          <LocationOnOutlinedIcon/>
          <div>
          <p>4515 16th Ave NE</p>
          <p>Seattle, WA 98105</p>
          </div>
          </div>
          </Col>
          
        </Row>

        <br />

        <Row className="banner-section">
  <Col md={12}>
    <img src={banner} alt="Three kids sit at a table having a snack" style={{ width: "100%", height: "auto", margin: "auto" }}/>
  </Col>
  <Col md={12} className="text-center">
    <button className="learn-more" id="schedule-tour-button" onClick={handleClick}>
      Schedule a Tour
    </button>
  </Col>
</Row>

       


    
      

      </ Container>
    </main>
  );
};

export default Home;
