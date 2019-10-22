import React from 'react';
//import styled from 'styled-components';
import { Container, Col, Row, Button, Form, InputGroup, FormControl, Dropdown } from 'react-bootstrap';
import { Trail } from '../Trail';

/*
const Styles = styled.div`
.description{
    width: 50%;
    height: 100;
    position: absolute;
    border: '4px solid black' ;
}

}

`;

export const ManageTrail = () => (

<Container>
<Row>
<Col>
    

</Col>
</Row>
</Container>
)*/

export class ManageTrail extends React.Component {
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

    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }

   editTrail(ID) {
    fetch('http://localhost:4200/api/Trails' + ID, {
    method: 'put',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
        "Name": this.Name.value,
        "Location": this.Location.value,
        "Description": this.Description.value,
        "Difficulty": this.Difficulty.value,
        "Length": this.Length.value,
    })
    })
    alert("Trail has been updated")
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
                        <Col xs="12" m="12">
                        <Form>
                            <Form.Group as={Col} controlId="PickaTrail">
                                <Form.Label>List of all trails</Form.Label>
                                <Form.Control as="select" name="Dropdownselect" onChange={this.handleInputChange}>                                 
                                    {trails.map(trails => ( 
                                    <option id="TrailOption">{trails.Name}</option>
                                    ))};                                                                       
                                </Form.Control>
                                </Form.Group>
                        </Form>                                       
                        </Col>

                        
                        <Col xs="12" m="12">

                        <p>The trail is:{Dropdownselect}</p>

                        <p>{Dropdownselect}</p>


                        </Col>
                        
                    </Row>
                </Container>

                </div>

            );

        }


    }

}

