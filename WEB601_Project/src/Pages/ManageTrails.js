import React from 'react';
import styled from 'styled-components';
import Home1 from '../Images/Home1.jpg';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';

const Styles = styled.div`
.description{
    width: 50%;
    height: 100;
    position: absolute;
    border: '4px solid black' ;
}

}

`;

export const ManageTrails = () => (

<Form>
  <Form.Group controlId="formBasicName">
    <Form.Label>Trail Name</Form.Label>
    <Form.Control type="Name" placeholder="Enter trail name" />
</Form.Group>

  <Form.Group controlId="formBasicLocation">
    <Form.Label>Trail Location</Form.Label>
    <Form.Control type="Location" placeholder="Trail location" />
  </Form.Group>

  <Form.Group controlId="formBasicDescription" >
    <Form.Label>Trail Description</Form.Label>
    <Form.Control type="Description" placeholder="Description of trail" className="description"/>        
  </Form.Group>
 
  <Form.Group as={Col} controlId="formGridDifficulty">
      <Form.Label>Difficulty</Form.Label>
      <Form.Control as="select">
        <option>Very Easy</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
        <option>Very Hard</option>
      </Form.Control>
    </Form.Group>

    <Form.Group controlId="formBasicLength">
    <Form.Label>Trail Length</Form.Label>
    <Form.Control type="TrailLength" placeholder="Trail length" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


)