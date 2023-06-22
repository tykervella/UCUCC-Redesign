import React from 'react';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import banner from "../assets/banner.jpg";
import kidsPlaying from "../assets/kids-playing.jpg"



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
            <h3 style={{textDecoration: "underline"}}>Welcome To</h3>
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
          <Col md = {4} className="home-infobox">

          </Col>

          <Col md = {4} className="home-infobox">

          </Col>

          <Col md = {4} className="home-infobox">

          </Col>
          
        </Row>

        <br />

        <Row className="banner-section" style={{display:"flex", justifyContent: "space-between"}}>
          {/* banner schedule button */}
          
                <button className="learn-more" id="schedule-tour-button" onClick={handleClick}>
                  {/* <span className="button-text" id="schedule-tour-button">Schedule a tour</span> */}
                  Schedule a Tour
                </button>

          <Col className="banner-image" md={12}>
            <img src={banner} alt="Three kids sit at a table having a snack" style={{ width: "100%", height: "auto", margin: "auto" }}/>
          </Col>
        </Row>

       


    
      

      </ Container>
    </main>
  );
};

export default Home;
