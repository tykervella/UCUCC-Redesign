import React from 'react'
import { Form, Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const Contact = () => {
  return (
    <div>
    <Container style = {{backgroundColor: "#d34323",display: "flex", justifyContent: "center", padding: "10px"}} fluid>  
    <Form >
        
       <Row style = {{paddingBottom: "20px"}}>
        <h3 style = {{color: "whitesmoke"}}>Contact Us</h3>
         <Col>
           <Form.Control placeholder="First name" />
         </Col>
         <Col>
           <Form.Control placeholder="Last name" />
         </Col>
       </Row>
       <Row style = {{paddingBottom: "20px"}}>
        <Col>
          <Form.Control placeholder = "Email address"/>
        </Col>
       </Row>
       <Row style = {{paddingBottom: "20px"}}>
        <Col>
          <p style = {{color: "whitesmoke"}}> Send a Message:</p>
          <Form.Control style = {{height: "250px"}}/>
        </Col>
       </Row>
       <Button type="submit">Submit</Button>
    </Form>
   
    </Container>
    </div>
  )
}

export default Contact