import React, {Component} from 'react';
import ListItem from './ListItem';
import DeleteTrail from './ManagerComponents/DeleteTrail';
//import ManageType  from './ManagerComponents/ManageType';
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

    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    state = {
        selectedManageType: ''
    }

    render() {
        if(this.state.isLoaded == true) {
            return(
              <p>Loading...</p>
            );
        } 
        console.log(this.state.selectedManageType);
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
                                <Form.Control as="select" name="Dropdown" 
                                onChange={(e) => {this.setState({selectedManageType: e.target.value})}}>
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
                    {this.renderSelectedManage(this.state.selectedManageType)}
                    </Row>
                    
                </Container>
                
                
            </div>
            
        );         
    }

    renderSelectedManage(selectedManageType) {

        const {Dropdownselect} = this.state;
        var{ isLoaded, trails} = this.state;
   

        if(selectedManageType == 'Delete a trail') {
            return(
                <div>
                <Container>
                    <Row>
                        <Col xs="12" md="12">
                        <Form>
                            <Form.Group as={Col} controlId="PickaTrail">
                                <Form.Label>List of all trails</Form.Label>
                                <Form.Control as="select" name="Dropdownselect" onChange={this.handleInputChange}>
                                    <h5>Pick a trail you would like to delete</h5>                                 
                                    {trails.map(trails => ( 
                                    <option id="TrailOption">{trails.Name}</option>
                                    ))};                                                                       
                                </Form.Control>
                                </Form.Group>
                        </Form>                                       
                        </Col>
                        <Col xs="12" md="12">
                        <p>The trail you would like to delete is: {Dropdownselect}</p>
                        </Col>
                    </Row>
                </Container>
                </div>
            );
        } else if(selectedManageType == 'Add a new trail') {
            return (
                <div>
                    <h1>Add a new trail</h1>
                </div>
            )
        } else if(selectedManageType == 'Edit a trail') {
            return (
                <div>
                    <h1>Edit a trail</h1>
                </div>
            )
        } else if(selectedManageType == '') {
            return (
                <div>
                    <h1>Please Select an option</h1>
                </div>
            )
        }
    }
}


    //{this.renderSelectedManage(this.state.selectedManageType)}
    /*renderSelectedManage(selectedManageType){
        const Manage = ManageType[selectedManageType]

        return <Manage />
    }*/

    /*renderTrails() {
        return _.map(this.state.trails, trails => {
            //Turn the array into a list of items
            return(
                <ListItem Name={trails.Name} Location={trails.Location}/>
            );
        });
    }*/


