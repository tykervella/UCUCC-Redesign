import React from 'react';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {
  return (
    <div>

      <Container fluid>
        <Row style={{ backgroundColor: "#D34323", display:"flex", justifyContent: "space-between"}}>
          <Col md = {12} style={{color: "whitesmoke", paddingTop: "10px", textAlign: "center" }}>
            <h1>TESTIMONIALS</h1>
          </Col>
        </Row>
        <Row style={{display:"flex", justifyContent: "space-between"}}>
          <Col md = {4} style={{ color: "black", paddingTop: "10px", textAlign: "center"}}>
        
            <p>"We recommend UCUCC Child Care Programs to friends and neighbors. Inclusive, play based curriculum, this is what all children deserve. We are so grateful for the values of safety and kindness that our daughters learned from their amazing teachers. During school closures, wildfire smoke, and heat waves, they have been there for our family. This is a special place."</p>
            <h3>- Tessa & Rohit</h3>
          </Col>
          <Col md = {4} style={{ color: "black", paddingTop: "10px", textAlign: "center"}}>
        
            <p>"We recommend UCUCC Child Care Programs to friends and neighbors. Inclusive, play based curriculum, this is what all children deserve. We are so grateful for the values of safety and kindness that our daughters learned from their amazing teachers. During school closures, wildfire smoke, and heat waves, they have been there for our family. This is a special place."</p>
            <h3>- Tessa & Rohit</h3>
          </Col>
          <Col md = {4} style={{ color: "black", paddingTop: "10px", textAlign: "center"}}>
        
            <p>"We recommend UCUCC Child Care Programs to friends and neighbors. Inclusive, play based curriculum, this is what all children deserve. We are so grateful for the values of safety and kindness that our daughters learned from their amazing teachers. During school closures, wildfire smoke, and heat waves, they have been there for our family. This is a special place."</p>
            <h3>- Tessa & Rohit</h3>
          </Col>
        
        </Row>
      </Container>
    </div>
  )
}

export default Testimonials