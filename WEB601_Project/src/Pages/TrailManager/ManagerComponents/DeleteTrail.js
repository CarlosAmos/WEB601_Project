import React, {Component} from 'react';
import { Container, Col, Row, Button, Form, InputGroup,FormControl, Dropdown, DropdownButton } from 'react-bootstrap';



export default class ManageTrail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {Name: '',Location: '',Description: '',Difficulty: '',Length: ''},
            isLoaded: false,
            Dropdownselect: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.editTrail = this.editTrail.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:4200/api/Trails')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                trails: json,
            })
        });
    }

    render() {

        var{ isLoaded, trails} = this.state;

        const {Dropdownselect} = this.state

        

        if(!isLoaded) {
            return <div>Loading...</div>;
        }

        else{

            return (
                /* Use a dropdown of all the trail names in a dropdown box, when trail selected, input boxes will be
                filled with data associated with that trail name */
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

                        <p>The trail is:{Dropdownselect}</p>

                        


                        </Col>
                        
                    </Row>
                </Container>

                </div>

            );

        }


    }

}