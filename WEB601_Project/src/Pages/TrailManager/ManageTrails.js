import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ListItem from './ListItem';
//import DeleteTrail from './ManagerComponents/DeleteTrail';
//import ManageType  from './ManagerComponents/ManageType';
import _ from 'lodash';
import { Container, Col, Row, Button, Form, InputGroup,FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

export class ManageTrails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            Trails: {
                Name: '',
                Location: '',
                Description: '',
                Difficulty: '',
                Length: '',
            },
                    
        };
        this.submitHandler = this.submitHandler.bind(this);
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
    //This is used when the user presses submit, will post the data to the api
    submitHandler(e) {
        e.preventDefault()
        
    
          fetch('http://localhost:4200/api/Trails' , {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
              "Name": this.Name.value,
              "Location": this.Location.value,
              "Description": this.Description.value,
              "Difficulty": this.Difficulty.value,
              "Length": this.Length.value,
            })
          });  
        //console.log(this.state)
        console.log("Trail has been added")
        }

    handleDeleteUser(id){
        return (e) => this.props.deleteUser(id);
    }

    state = {
        selectedManageType: ''
    }
    //
    render() {
        if(this.state.isLoaded === true) {
            return(
              <p>Loading...</p>
            );
        } 
        //console.log(this.state.selectedManageType);
        
        // Code for the "Pick an option" dropdown box. The selected option is rendered under the dropdown.

        return(
            <div>
                <Container>
                    <Row>
                        <Col xs='4' md='4'>
                            <Button></Button>
                        </Col>
                        <Col xs='4' md='4'>
                        <Button>Edit a trail</Button>
                        </Col>
                        <Col xs='4' md='4'>
                        <Button><Link to="/Pages/TrailManager/DeleteTrails">Delete A Trail</Link></Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );

        /*return(
            //<p>{this.renderTrails()}</p>
            <div>
                /*<Container>
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
            
        );   */      
    }

    //This is used to render a form depending on the selected option
    /*renderSelectedManage(selectedManageType) {

        const {Dropdownselect} = this.state;
        const { isLoaded, Trails} = this.state;

   
        //If delete a trail option is selected. Show this form
        if(selectedManageType === 'Delete a trail') {
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
                                    {Trails.map(Trails => ( 
                                    <option id="TrailOption">{Trails.Name}</option>
                                    ))};                                                                       
                                </Form.Control>
                                </Form.Group>
                        </Form>                                       
                        </Col>
                        <Col xs="12" md="12">
                        <p>The trail you would like to delete is: {Dropdownselect}</p>
                        <Button onClick={this.handleDeleteUser(Trails.id)}>Delete</Button>
                        </Col>
                    </Row>
                </Container>
                </div>
            );

        // onSubmit={this.submitHandler}
        //If Add a new option is selected. Show this form
        } else if(selectedManageType === 'Add a new trail') {
            return (
                <div>
                  <form >
                    <div>
                      <h5>Name</h5>
                      <input type="text" name="Name" id="Name" value={this.Name} onChange={this.changeHandler} onSubmit={this.Name}/>
                    </div>
                    <div>
                      <h5>Location</h5>
                      <input type="text" name="Location" id="Location" value={this.Location} onChange={this.changeHandler} onSubmit={this.Location}/>
                    </div>
                    <div>
                      <h5>Description</h5>
                      <input type="text" name="Description" id="Description" value={this.Description} onChange={this.changeHandler} onSubmit={this.Description}/>
                    </div>
                    <div>
                      <h5>Difficulty</h5>
                      <input type="text" name="Difficulty" id="Difficulty" value={this.Difficulty} onChange={this.handleChange} onSubmit={this.Difficulty}/>
                    </div>
                    <div>
                      <h5>Length</h5>
                      <input type="text" name="Length" id="Length" value={this.Length} onChange={this.handleChange} onSubmit={this.Length}/>
                    </div>
                    <button id="Submit" type="submit">Submit</button>
                  </form>
                </div>
              )
        //If edit a trail option is selected. Show this form
        } else if(selectedManageType === 'Edit a trail') {
            return (
                <div>
                    <h1>Edit a trail</h1>
                </div>
            )
        } else if(selectedManageType === '') {
            return (
                <div>
                    <h1>Please Select an option</h1>
                </div>
            )
        }
    }*/
}




