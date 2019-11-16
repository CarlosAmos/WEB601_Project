import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch,} from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';


export class TrailHome extends Component {

    render() {
        return(
            <div>
                <Container>
                    <Row height="400px">
                        <Col md='4' xs='12'>
                            <Link to="./AddTrails">Add Trail</Link>
                        </Col>
                        <Col md='4' xs='12'>
                        <Link to="./ManageTrails">Manage Trail</Link>
                        </Col>
                        <Col md='4' xs='12'>
                        <Link to="./DeleteTrails">Delete Trail</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}