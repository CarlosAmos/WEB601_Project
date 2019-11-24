import React, {Component} from 'react';
import { Container, Col, Row, Form,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import './Register.css'

import { userActions } from '../../_actions/User.Action';


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            User: {
                Username: '',
                Password: ''
            },
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }  
    
    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { User } = this.state;
        if (User.Username && User.Password) {
            this.props.register(User);
        }
    }
    
    render() {
       const {registering} = this.props;
       const {User, submitted} = this.state;
        return(
            <div>
                <br/>
                <Container>
                    <Row>
                        <Col md='3' s='12'>
                        </Col>
                        <Col id='Container' md='6' s='12'>
                            <h2>Register</h2>
                            <Form onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !User.Username ? ' has-error' : '')}>                            
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="Username"
                                    ref={(ref) => { this.Username = ref }}
                                    placeholder="Enter Username" 
                                    />                                    
                                </Form.Group>
                            </div>
                            <div className={'form-group' + (submitted && !User.Password ? ' has-error' : '')}>
                            <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    type="password" 
                                    name="Password"
                                    ref={(ref) => { this.Password = ref }}
                                    placeholder="Password" 
                                    />
                                </Form.Group>
                            </div>                                
                                <Button variant="primary" type="submit" >
                                    Register
                                </Button>
                                <Button variant="primary" href={'../Login/Login'}>
                                    Cancel
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

function mapState(state) {
    const {registering} = state.registration;
    return {registering};
}

const actionCreators = {
    reigster: userActions.register
}
const connectedRegisterPage = connect(mapState, actionCreators) (Register)
export {connectedRegisterPage as Register}



