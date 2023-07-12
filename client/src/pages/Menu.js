import React from 'react'
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  return (
    <div>
      <Container>
        <Row style={{display:"flex", justifyContent: "space-between"}}>
          <Col md = {12} style={{ backgroundColor: "#D34323", color: "whitesmoke", paddingTop: "10px", textAlign: "center" }}>
            <h1>Menu</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Menu