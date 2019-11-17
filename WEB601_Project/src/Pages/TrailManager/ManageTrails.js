import React, {Component} from 'react';
import { Container, Col, Row, Form, InputGroup,FormControl } from 'react-bootstrap';

export class ManageTrails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            Trails: [],                    
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

        var { Trails } = this.state;

        return(
            <div>
                <h2>Edit a Trail</h2>
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
                                       
                                        <Form.Label>Name</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <Form.Label>Location</Form.Label>
                                    <Form.Group as={Col} controlId="formGridState">
                                         <Form.Control as="select">
                                                <option>...</option>  
                                                <option>...</option>    
                                                <option>...</option>                                   
                                            </Form.Control>                                              
                                        </Form.Group>

                                    <Form.Label>Description</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl as="textarea" aria-label="With textarea" />
                                    </InputGroup>

                                    <Form.Label>Difficulty</Form.Label>
                                    <Form.Group as={Col} controlId="formGridState">
                                         <Form.Control as="select">
                                                <option>Very Easy</option>  
                                                <option>Easy</option>    
                                                <option>Medium</option>
                                                <option>Hard</option>
                                                <option>Very Hard</option>                                   
                                            </Form.Control>                                              
                                        </Form.Group>

                                        <Form.Label>Length</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl as="textarea" aria-label="With textarea" />
                                    </InputGroup>

                                </Form>  
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




