import React from 'react';
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import styled from 'styled-components';

import { Container, Col, Row, Button} from 'react-bootstrap';


/*const Styles = styled.div`
.description{
    width: 50%;
    height: 100;
    position: absolute;
    border: '4px solid black' ;
}

}

`;*/

export const TrailManager = () => (
<Container fluid='false'>
  <div className="col-12">
    <br/>
    <Row className="justify-content-md-center" >

    <Col xs="12" md="4">
    <h3>Add a Trail</h3>
      <Button variant="outline-success">Add</Button>
    </Col>
    <br/>
    <Col xs="12" md="4">
    <h3>Edit a Trail</h3>
    <Button variant="outline-success">Edit</Button>
    </Col>
    <br/>
    <Col xs="12" md="4">
    <h3>Delete a Trail</h3>
    <Button variant="outline-success">Delete</Button>
    </Col>
    </Row>
  <Row>
    <Col>
    
    </Col>
  </Row>


  </div>
</Container>


)