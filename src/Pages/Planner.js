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

export const Planner = () => (
    <Container>
    <div className="col-12">
    <Row className="justify-content-md-center" height='100'>
        <div className="image">
        <h1> Trail Planner </h1>
        </div>
        </Row>

        <Row className="justify-content-md-center" height='100'>
        <Col xs="12" md="2">

        </Col>
        <Col xs="8" md="5">
            <h2>Pick Trail 1</h2>
            <p>Trail location</p>
            </Col>
        <Col xs="4" md="3">
            <p>Time + Dist</p>
            </Col>
        <Col xs="12" md="2">

        </Col>
        </Row>

        <Row className="justify-content-md-center" height='100'>
        <Col xs="12" md="2">

        </Col>
        <Col xs="8" md="5">
            <h2>Pick Trail 1</h2>
            <p>Trail location</p>
            </Col>
        <Col xs="4" md="3">
            <p>Time + Dist</p>
            </Col>
        <Col xs="12" md="2">

        </Col>
        </Row>

        <Row className="justify-content-md-center" height='100'>
        <Col xs="12" md="2">

        </Col>
        <Col xs="8" md="5">
            <h2>Pick Trail 1</h2>
            <p>Trail location</p>
            </Col>
        <Col xs="4" md="3">
            <p>Time + Dist</p>
            </Col>
        <Col xs="12" md="2">

        </Col>
        </Row>
        <Row className="justify-content-md-left" height='100'>
        <div>
            <h1>Total time here</h1>
        </div>
        </Row>         
        <Row className="justify-content-md-center" height='100'>
        <div>
            <h1>Tips</h1>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
        </div>
        </Row>     
        
    </div>
    </Container>
)