import React from 'react';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Calendar from '../components/Calendar'


const CalendarPage = () => {

  return (
    <Container style = {{backgroundColor: "#d34323"}} fluid>
      <Row style={{display:"flex", justifyContent: "center"}}>
        <Col md={4} style={{ color: "whitesmoke", paddingTop: "10px", textAlign: "center"}}>
        <h3>Schedule a Tour</h3>
          </Col></Row>
      <div className="flex-row justify-center">
        
        <Calendar/>

    

      </div>
    </Container>
  );
};

export default CalendarPage;
