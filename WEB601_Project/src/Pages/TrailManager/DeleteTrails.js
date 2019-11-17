import React, {Component} from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import './DeleteTrail.css'

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
                <br/>
                    <Container>
                        <Row>
                            <Col md='3' xs='12'>
                                                        
                            </Col>
                            <Col md='6' xs='12'>
                                <div id="Container">
                                <h2>Delete a Trail</h2>
                                <Form id="Formbox">                                
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
                                <Button variant="danger">Delete Trail</Button>
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




