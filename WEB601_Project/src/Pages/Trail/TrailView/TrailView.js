import React, {Component} from 'react';
import { Container, Col, Row, Table} from 'react-bootstrap';
import mtarthur from '../Images/mtarthur1.jpg';

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
                {Trails.map(Trail => (
                <Container key={Trail.ID}>
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
                    <Row>
                <h4>Photos of {Trail.Name}</h4>


                    </Row>
                </Container>
                ))};
            </div>
        )
    }
}