import React from 'react';
//import styled from 'styled-components';
import { BrowserRouter as Router, Link,} from 'react-router-dom';
import { Container, Col, Row, Card } from 'react-bootstrap';
//import TrailCard from '../Components/SingleTrailList';



//Imports for images
import mtarthur from '../Images/mtarthur.jpg';
//import lakesylvester from '../Images/lakesylvester.jpg';
//import mtlodestone from '../Images/mtlodestone.jpg';
//import mtrobert from '../Images/mtrobert.jpg'

export class Trail extends React.Component {
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

    render() {

        var { Trails } = this.state;

        return ( 
            <div>

            {Trails.map(Trail => (
                <Container>
                    <br />
                    <Row> 
                    <Col md='1' xs='12'>

                    </Col>
                    <Col md='2' xs='12'>
                    <img src={mtarthur} alt={Trail.Name} width="130% "></img>
                    </Col>
                    <Col md='8' xs='12'>
                    <div key={Trail.ID}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{Trail.Name}</Card.Title>
                                        <Card.Text>
                                        {Trail.Location}
                                                </Card.Text>
                                        <Link to={`/Trail/TrailView/TrailView/${Trail.ID}`}>View Trail</Link>
                                    </Card.Body>
                                </Card>
                    </div>
                    </Col>
                    <Col md='1' xs='12'>

                    </Col>
                </Row>
            </Container>
            ))};
            </div>
        )
    }

}

