import React, {Component} from 'react';
import ListItem from './ListItem';
import DeleteTrailCom from './ManagerComponents/DeleteTrail';
import _ from 'lodash';
import { Container, Col, Row, Button, Form, InputGroup,FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

export class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            trails: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:4200/api/Trails')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: false,
                trails: json,
            })
        });
    }  

    render() {
        if(this.state.isLoaded == true) {
            return(
              <p>Loading...</p>
            );
        } 
        console.log(DeleteTrailCom)
        return(
            //<p>{this.renderTrails()}</p>
            <div>
                <Container>
                    <Row>
                        <Col xs='12' md='3'>
                        
                        </Col>
                        
                        <Col xs='12' md='6'>
                            <Form.Group as={Col} controlId="formGridState">
                            <h4>What would you like to do?</h4>
                                <Form.Control as="select" name="Dropdown">
                                    <option id="1">Add a new trail</option>
                                    <option id="2">Edit a trail</option>
                                    <option id="3">Delete a trail</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col xs='12' md='3'>
                        
                        </Col>
                    </Row>

                    <Row>
                    
                    </Row>
                    
                </Container>
                
                
            </div>
            
        );         
    }

    /*renderTrails() {
        return _.map(this.state.trails, trails => {
            //Turn the array into a list of items
            return(
                <ListItem Name={trails.Name} Location={trails.Location}/>
            );
        });
    }*/
}

