import React, {Component} from 'react';
import { Container, Col, Row, Table, Carousel} from 'react-bootstrap';
import mtarthur from '../Images/mtarthur1.jpg';
import mtarthur1 from '../Images/mtarthur1.jpg';
import mtarthur2 from '../Images/mtarthur2.jpg';
import mtlodestone1 from '../Images/mtlodestone1.jpg';
import mtlodestone2 from '../Images/mtlodestone2.jpg';

import './TrailView.css';


export class TrailView extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            Trails: [],                       
        };        
    }

    componentDidMount() {
        let ID = this.props.match.params.id;
        fetch(`http://localhost:4200/api/Trails/${ID}`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                Trails: json,
            }, () => {
                console.log(this.state)
            })
        });
    } 


    render() {
        var { Trails } = this.state;

        return(
            <div>
                <br/>
                {Trails.map(Trail => (
                <Container key={Trail.ID} id="Container">
                    <Row>
                        <Col md='4' xs='12'>
                            <img src={mtarthur} width="100% "></img>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>Difficulty</td>
                                        <td>{Trail.Difficulty}</td>
                                    </tr>
                                    <tr>
                                        <td>Length</td>
                                        <td>{Trail.Length}km</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col md='8' xs='12'>
                        <h1>{Trail.Name}</h1>
                        <h4>{Trail.Location}</h4>
                        <br/>
                        <p>{Trail.Description}</p>
                        </Col>
                    </Row>                    
                    <Row id="PhotoGallery">
                <h4 style={{textAlign:"right"}}>Photos of {Trail.Name}</h4>
                    <Col >
                    
                    <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-60"
                        src={mtarthur1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                                                
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-60"
                        src={mtarthur2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-60"
                        src={mtlodestone1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-60"
                        src={mtlodestone2}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
                    
                    </Col>
                    </Row>
                </Container>
                ))};
            </div>
        )
    }
}