import React, {Component} from 'react';
import { Container, Col, Row, Form,} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import './Login.css'

import { userActions } from '../../_actions/User.Action';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Username: '',
            Password: '',
            submitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true});
        const {Username,Password} = this.state;
        if (Username && Password) {
            this.props.login(Username,Password);
        }
        
    }

    render() {
        const {logginIn} = this.props;
        const {Username,Password,submitted} = this.state;
        return(
            <div>
                <br/>
                <Container>
                    <Row>
                        <Col md='3' s='12'>
                        </Col>
                        <Col id='Container' md='6' s='12'>
                            <h2>Login</h2>
                            <Form onSubmit={this.handleSubmit}>
                            <div>                            
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
                            <div>
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
                                <Button variant="primary" type="submit" onSubmit={this.handleSubmit} >
                                    Login
                                </Button>
                                <Button variant="primary" href={'../Register/Register'}>
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

function mapState(state) {
    const {logginIn} = state.authentication
    return {logginIn};
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect (mapState, actionCreators)(Login);
export {connectedLoginPage as Login}





