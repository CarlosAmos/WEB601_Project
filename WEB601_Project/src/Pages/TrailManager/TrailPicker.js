import React from 'react';
import { BrowserRouter as Router, Link,} from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './TrailPicker.css'

export class TrailPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Trails: [],            
        }
    }

    componentDidMount() {
        fetch('http://localhost:4200/api/Trails')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    Trails: json,

                })
            });
    }   

    onDelete = ID => {
            fetch(`http://localhost:4200/api/Trails/${ID}`, {
                method: 'DELETE'
            })            
                .then(res => res.json())
                .then(json => {
                    console.log("Delete successful")
                    return json;                    
                });
        
    }

    render() {

        var { Trails } = this.state;

        return ( 
            <div>

            {Trails.map(Trail => (
                <Container>
                    <br />
                    <Row> 
                    <Col md='2' xs='12'>
                    
                    </Col>
                    <Col md='8' xs='12'>
                    <div key={Trail.ID} id="Card">
                        <h3>{Trail.Name}</h3>
                        <h6>{Trail.Location}</h6>
                                <Button variant="contained" color="primary" href={`/TrailManager/ManageTrails/${Trail.ID}`}>
                                    Edit
                                </Button>
                                <Button variant="contained" color="secondary" href={`/TrailManager/TrailPicker`} onClick={() => {this.onDelete(Trail.ID)}}>
                                    Delete
                                </Button>
                    </div>
                    </Col>
                    <Col md='2' xs='12'>

                    </Col>
                </Row>
            </Container>
            ))};
            </div>
        )
    }

}

