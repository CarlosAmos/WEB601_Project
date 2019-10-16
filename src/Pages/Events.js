import React from 'react'
import styled from 'styled-components';
import Home1 from '../Images/Home1.jpg';
import { Container, Col, Row } from 'react-bootstrap';

const Styles = styled.div`
.image{
    width: 100%;
    height: 100;
    position: absolute;
    border: '4px solid black' ;
}
.ContentBoxes{
    border: '4px solid black' ;
}

}

`;

export const Events = () => (
    <Container>
    <div className="col-12">
    <Row className="justify-content-md-center" height='100'>
        <div>
            <h1> Upcoming Events </h1>
        </div>
    </Row>
        
        <Row className="justify-content-md-center" height='100'>
        <Col xs="4" md="2">
        <div className="image">
        <img src={Home1} alt="sefeee" width="100%"></img>
        </div>
            </Col>
        <Col xs="4" md="2">
            <h4>Date</h4>
            <p>Date Here</p>
            </Col>
        <Col xs="4" md="8">
            <h4>Event 1</h4>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain</p>
            </Col>
        </Row>

        <Row className="justify-content-md-center" height='100'>
        <Col xs="4" md="2">
        <div className="image">
        <img src={Home1} alt="sefeee" width="100%"></img>
        </div>
            </Col>
        <Col xs="4" md="2">
            <h4>Date</h4>
            <p>Date Here</p>
            </Col>
        <Col xs="4" md="8">
            <h4>Event 2</h4>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain</p>
            </Col>
        </Row>

        <Row className="justify-content-md-center" height='100'>
        <Col xs="4" md="2">
        <div className="image">
        <img src={Home1} alt="sefeee" width="100%"></img>
        </div>
            </Col>
        <Col xs="4" md="2">
            <h4>Date</h4>
            <p>Date Here</p>
            </Col>
        <Col xs="4" md="8">
            <h4>Event 3</h4>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain</p>
            </Col>
        </Row>

        <Row className="justify-content-md-center" height='100'>
        <Col xs="4" md="2">
        <div className="image">
        <img src={Home1} alt="sefeee" width="100%"></img>
        </div>
            </Col>
        <Col xs="4" md="2">
            <h4>Date</h4>
            <p>Date Here</p>
            </Col>
        <Col xs="4" md="8">
            <h4>Event 4</h4>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain</p>
            </Col>
        </Row>

        <Row className="justify-content-md-center" height='100'>
        <Col xs="4" md="2">
        <div className="image">
        <img src={Home1} alt="sefeee" width="100%"></img>
        </div>
            </Col>
        <Col xs="4" md="2">
            <h4>Date</h4>
            <p>Date Here</p>
            </Col>
        <Col xs="4" md="8">
            <h4>Event 5</h4>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain</p>
            </Col>
        </Row>

     
        
        
    </div>
    </Container>
)