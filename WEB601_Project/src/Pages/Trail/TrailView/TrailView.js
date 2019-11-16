import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch,} from 'react-router-dom';
import { Container, Col, Row, Table} from 'react-bootstrap';


export class TrailView extends Component {
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


    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col md='4' xs='12'>
                            <h1>Picture of Trail</h1>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>Difficulty</td>
                                        <td>Very Easy</td>
                                    </tr>
                                    <tr>
                                        <td>Length</td>
                                        <td>9km</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col md='8' xs='12'>
                        <h2>Trail Name Name Name Name</h2>
                        <h3>Trail Location Location</h3>
                        <br/>
                        <p>This is a test description about a trail</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}