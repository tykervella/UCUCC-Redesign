import React from 'react'
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Enrollment = () => {
  return (
    <div>
      <Container fluid>
      <Row style={{backgroundColor: "#D34323", display:"flex", justifyContent: "space-between"}}>
          <Col md = {12} style={{color: "whitesmoke", paddingTop: "10px", textAlign: "center" }}>
            <h1>Enrollment</h1>
          </Col>
        </Row>

      <Row style={{display:"flex", justifyContent: "center"}}>
          <Col md = {3} style={{ color: "black", paddingTop: "10px", textAlign: "center"}}>
        
            <p>If you are interested in Child Care at UCUCC Child Care Programs, please sign up to be added to our Waitlist. We are actively enrolling from our waitlist!</p>
           
          </Col>
          <Col md = {9} style={{backgroundColor: "#4468f4", color: "whitesmoke", paddingTop: "10px", textAlign: "center"}}>
          <h3>Waitlist</h3>
          <p>Priority is given to siblings and families on child care subsidy programs</p>
          <p>If you are interested in Child Care at UCUCC Child Care Programs, please sign up to be added to our Waitlist. We are actively enrolling from our waitlist!</p>
       
      </Col>
        
        </Row>

      </Container>
    </div>
  )
}

export default Enrollment