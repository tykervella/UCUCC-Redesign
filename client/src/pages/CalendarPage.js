import React from 'react';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Calendar from '../components/Calendar'


const CalendarPage = () => {

  return (
    <main>
      <div className="flex-row justify-center">
        <Calendar/>

    

      </div>
    </main>
  );
};

export default CalendarPage;
