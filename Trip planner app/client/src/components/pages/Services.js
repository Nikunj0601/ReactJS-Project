import React from 'react';
import '../../App.css';
import { Form, Row, Col, Button } from 'react-bootstrap';


export default function Services() {
  return (
    <div className='services'>
      <form>
        <h3 >Book A Date</h3>
      
      
      <Row>
      <label style={{display:'flex', justifyContent: "center", alignItems: "center"}}  for="start"><h6>Select date:</h6></label>
      </Row>
      <Row>
      <input style={{display:'flex', justifyContent: "center",marginLeft: "80px", alignItems: "center"}} type="date" id="start" name="trip-start"
       value="2021-10-29"
       min="2021-01-01" max="2021-12-31"></input>
      </Row>

      <Row style={{display:'flex', justifyContent: "center", alignItems: "center"}}>
        <Button size="lg" variant="success"  style={{ marginTop: 20}}>
          Book
        </Button>
      </Row>
      </form>
    
      
    </div>
    )
 
}
