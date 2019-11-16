import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ListItem from './ListItem';
//import DeleteTrail from './ManagerComponents/DeleteTrail';
//import ManageType  from './ManagerComponents/ManageType';
import _ from 'lodash';
import { Container, Col, Row, Button, Form, InputGroup,FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

export class DeleteTrails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            Trails: [],                    
        };        
    }

    componentDidMount() {
        fetch('http://localhost:4200/api/Trails')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: false,
                Trails: json,
            })
        });
    }  

    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        
        var { Trails } = this.state;

        return(
            <div>
                <h2>Delete a Trail</h2>
                    <Container>
                        <Row>
                            <Col md='3' xs='12'>
                                                        
                            </Col>
                            <Col md='6' xs='12'>
                                <div>
                                <Form>                                
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Trail Name</Form.Label>
                                            <Form.Control as="select">
                                            {Trails.map(Trail => (
                                                <option key={Trail.ID}>{Trail.Name}</option>    
                                                ))};                                            
                                            </Form.Control>                                              
                                        </Form.Group>
                                </Form>  
                                <br/>
                                <Button variant="danger">Danger</Button>
                                </div>              
                            </Col>
                            <Col md='3' xs='12'>
                                                        
                            </Col>
                        </Row>
                    </Container>
               
            </div>
        );    
    }
}




