import React, {Component} from 'react';
import { Container, Col, Row, Form, InputGroup,FormControl } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './ManageTrail.css'

export class ManageTrails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            Trails: [],
                              
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        let ID = this.props.match.params.id;
        fetch(`http://localhost:4200/api/Trails/${ID}`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: false,
                Trails: json,
            })
        });
    }  

    handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:4200/api/Trails${this.state.ID}`, {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "Name": this.Name.value,
                "Location": this.Location.value,
                "Description": this.Description.value,
                "Difficulty": this.Difficulty.value,
                "Length": this.Length.value,
            })            
        });
        console.log("Trail has been updated")
    }

    handleInputChange(e){
        let Trails = this.state.Trails
        Trails[e.target.name] = e.target.value

        this.setState({
            Trails
        })
    }

    render() {
        if(this.state.isLoaded === true) {
            return(
              <p>Loading...</p>
            );
        } 

        var { Trails } = this.state;
// Insert refernces for the fields
        return(
            <div>          
                <br/>      
                {Trails.map(Trail => (
                    <Container>
                        <Row>
                            <Col md='3' xs='12'>
                                                        
                            </Col>
                            <Col md='6' xs='12'>
                                <div id="Container">
                                    <h2>Edit a Trail</h2>
                                <Form id="Formbox" key={Trail.ID} onSubmit={this.handleSubmit}>                                
                                       
                                        <Form.Label>Name</Form.Label>
                                    <InputGroup className="mb-3" >
                                        <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            value={Trail.Name}
                                            
                                            ref={(ref) => { this.Name = ref }}
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            onChange={this.handleInputChange}
                                        />
                                    </InputGroup>

                                    <Form.Label>Location</Form.Label>
                                    <Form.Group as={Col} controlId="formGridState">
                                         <Form.Control as="select" value={Trail.Location} onChange={this.handleInputChange} ref={(ref) => { this.Location = ref }}>
                                                <option>Kahurangi National Park</option>  
                                                <option>Cobb Valley</option>    
                                                <option>Nelson Lakes National Park</option>                                   
                                            </Form.Control>                                              
                                        </Form.Group>

                                    <Form.Label>Description</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl as="textarea" aria-label="With textarea" value={Trail.Description} onChange={this.handleInputChange} ref={(ref) => { this.Description = ref }}/>
                                    </InputGroup>

                                    <Form.Label>Difficulty</Form.Label>
                                    <Form.Group as={Col} controlId="formGridState">
                                         <Form.Control as="select" value={Trail.Difficulty} onChange={this.handleInputChange} ref={(ref) => { this.Difficulty = ref }}>
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
                                            value={Trail.Length}
                                            onChange={this.handleInputChange}
                                            ref={(ref) => { this.Length = ref }}
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <p></p>
                                    <Button variant="contained" color="primary" type="submit">
                                        Edit
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
                    </Container>
                    ))};
            </div>
        );    
    }
}




