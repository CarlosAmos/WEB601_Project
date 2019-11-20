import React, { Component } from 'react';
import { Container, Col, Row, InputGroup, Form, FormControl } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './AddTrail.css'

export class AddTrails extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:4200/api/Trails', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "Name": this.Name.value,
                "Location": this.Location.value,
                "Description": this.Description.value,
                "Difficulty": this.Difficulty.value,
                "Length": this.Length.value,
            })
        });
        console.log("Trail has been added")
    }

    render() {

        return (

            <div ><br />
                <Container>
                    <Row>
                        <Col md='3' xs='12'>

                        </Col>
                        <Col md='6' xs='12'>

                            <div id="Container">

                                <h2>Add a Trail</h2>
                                <Form id="Formbox" onSubmit={this.handleSubmit}>

                                    <Form.Label>Name</Form.Label>
                                    <InputGroup className="mb-3" >
                                        <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            ref={(ref) => { this.Name = ref }} type="text" id="Name" name="Name"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <br />

                                    <Form.Label>Location</Form.Label>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Control as="select" ref={(ref) => { this.Location = ref }} type="text" id="Location" name="Location">
                                            <option>Kahurangi National Park</option>
                                            <option>Cobb Valley</option>
                                            <option>Nelson Lakes National Park</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <br />


                                    <Form.Label>Description</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl as="textarea" aria-label="With textarea" ref={(ref) => { this.Description = ref }} type="text" id="Description" name="Description" />
                                    </InputGroup>
                                    <br />

                                    <Form.Label>Difficulty</Form.Label>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Control as="select" ref={(ref) => { this.Difficulty = ref }} type="text" id="Difficulty" name="Difficulty">
                                            <option>Very Easy</option>
                                            <option>Easy</option>
                                            <option>Medium</option>
                                            <option>Hard</option>
                                            <option>Very Hard</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <br />

                                    <Form.Label>Length(KM)</Form.Label>
                                    <InputGroup className="mb-3" >
                                        <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            ref={(ref) => { this.Length = ref }} type="text" id="Length" name="Length"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <br />


                                    <Button variant="contained" color="primary" type="submit" onSubmit={this.handleSubmit}>
                                        Add Trail
                                    </Button>
                                    <Button variant="contained" color="secondary" href={"/TrailManager/TrailHome"}>
                                        Return
                                    </Button>
                                    <br />

                                </Form>


                            </div>
                        </Col>
                        <Col md='3' xs='12'>

                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}


                /*
                <Container>
                        <Row>
                            <Col md='3' xs='12'>
                                                        
                            </Col>
                            <Col md='6' xs='12'>
                                <div id="Container">
                                    <h2>Add a Trail</h2>
                                <Form id="Formbox" onSubmit={this.handleSubmit}>                                
                                       
                                        <Form.Label>Name</Form.Label>
                                    <InputGroup className="mb-3" >
                                        <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl
                                          ref={(ref) => {this.Name = ref}}
                                          name="Name"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <Form.Label>Location</Form.Label>
                                    <Form.Group as={Col} controlId="formGridState">
                                         <Form.Control as="select" ref={(ref) => {this.Location = ref}} name="Location">
                                                <option>Kahurangi National Park</option>  
                                                <option>Cobb Valley</option>    
                                                <option>Nelson Lakes National Park</option>                                   
                                            </Form.Control>                                              
                                        </Form.Group>

                                    <Form.Label>Description</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl as="textarea" aria-label="With textarea" ref={(ref) => {this.Description = ref}} name="Description"/>
                                    </InputGroup>

                                    <Form.Label>Difficulty</Form.Label>
                                    <Form.Group as={Col} controlId="formGridState">
                                         <Form.Control as="select" ref={(ref) => {this.Difficulty = ref}} name="Difficulty">
                                                <option>Very Easy</option>  
                                                <option>Easy</option>    
                                                <option>Medium</option>
                                                <option>Hard</option>
                                                <option>Very Hard</option>                                   
                                            </Form.Control>                                              
                                        </Form.Group>

                                        <Form.Label>Length(KM)</Form.Label>
                                        <InputGroup className="mb-3" >
                                        <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            ref={(ref) => {this.Length = ref}}
                                            name="Length"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <p></p>
                                    <Button variant="contained" color="primary" type="submit" id="Submit" onSubmit={this.handleSubmit} href={"/TrailManager/TrailPicker"}>
                                        Add Trail
                                    </Button>
                                    <Button variant="contained" color="secondary" href={"/TrailManager/TrailPicker"}>
                                        Return
                                    </Button>

                                </Form>  
                                </div>              
                            </Col>
                            <Col md='3' xs='12'>
                                                        
                            </Col>
                        </Row>
                    </Container>*/

                    

/* <div id="Container">
                <container >
                <h2>Add a Trail</h2>
                <form onSubmit={this.handleSubmit}>
                <h5>Name</h5>
                <input ref={(ref) => {this.Name = ref}} type="text" id="Name" name="Name"/>
                <br/>
                <br/>
                <h5>Location</h5>
                <select ref={(ref) => {this.Location = ref}} type="text" id="Location" name="Location">
                    <option>Yeet</option>
                </select>
                <br/>
                <br/>
                <h5>Description</h5>
                <input ref={(ref) => {this.Description = ref}} type="text" id="Description" name="Description"/>
                <br/>
                <br/>
                <h5>Difficulty</h5>
                <input ref={(ref) => {this.Difficulty = ref}} type="text" id="Difficulty" name="Difficulty"/>
                <br/>
                <br/>
                <h5>Length</h5>
                <input ref={(ref) => {this.Length = ref}} type="text" id="Length" name="Length"/>
                
                <br/>
                <br/>
                
                                    <Button variant="contained" color="primary" type="submit" onSubmit={this.handleSubmit}>
                                        Add Trail
                                    </Button>
                                    <Button variant="contained" color="secondary" href={"/TrailManager/TrailPicker"}>
                                        Return
                                    </Button>
                <br/>
                <br/>
                </form>

                </container>
                </div>   
            </div> */