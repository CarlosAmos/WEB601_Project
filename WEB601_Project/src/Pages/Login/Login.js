import React, {Component} from 'react';
import { Container, Col, Row, Form,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import './Login.css'

export class Login extends Component {
    

    render() {


        return(
            <div>
                <br/>
                <Container>
                    <Row>
                        <Col md='3' s='12'>
                        </Col>
                        <Col id='Container' md='6' s='12'>
                            <h2>Login</h2>
                            <Form>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="username" placeholder="Enter Username" />                                    
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" >
                                    Login
                                </Button>
                                <Button variant="primary" >
                                    Register
                                </Button>
                            </Form>
                        </Col>
                        <Col md='3' s='12'>
                        </Col>
                    </Row>
                    
                </Container>
                
                
            </div>
        );    
    }
}




