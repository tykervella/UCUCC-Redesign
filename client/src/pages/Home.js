import React from 'react';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/calendar");
  };



  return (
    <main>
      <Container>
    
    
         
            

            <Row className="float-right banner-section" style={{ height: "450px" }}>
              {/* banner marketplace button */}
              <div className="mr-2">
              <div id="container" className="-ml-4 shadow-lg bg-[#4B957E] p-2 rounded-lg">
                <div className="border-2 border-[#FFEC99] p-2.5 rounded">
                  <button className="learn-more" onClick={handleClick}>
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text" id="schedule-tour-button">Schedule a tour</span>
                  </button>
                </div>
              </div>
              </div>
            </Row>
    
      

      </ Container>
    </main>
  );
};

export default Home;
