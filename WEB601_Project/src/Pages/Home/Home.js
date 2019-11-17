import React from 'react'
//import styled from 'styled-components';
import HomeCarousel from './HomeCarousel';
import { Container, Col, Row } from 'react-bootstrap';
import './Home.css'

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Tips: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('http://localhost:4200/api/Tips')
        .then(res => res.json())
        .then(json => {
            this.setState({
                Tips: json,
                isLoaded: true,
            })
        });
    }  


    render() {

        var { Tips } = this.state;

        return (
            <Container>
                <div id="Container" className="col-12">
                    <div className="image">
                        <HomeCarousel/>
                    </div>
                    <Row className="justify-content-md-center" height='100'>
                        <Col xs="12" md="4">
                            <h2>Random Tips</h2>
                            <ul>
                            {Tips.map(Tip => (
                                    <li key={Tip.ID}>
                                        {Tip.Description}
                                    </li>
                                ))};    
                            </ul>  
                        </Col>
                        <Col xs="12" md="4">
                            <h2>About Us</h2>
                            <p> Adventure Nelson is a website that can provide you with the lastest information on all trails used for tramping in the Nelson region. We provide information on trails like the difficulty, the length, and some trails will also provide you with a guide on what to bring for your walk. We also provide you with information of events in the region which can range from walking events to mountain biking events.</p></Col>
                        <Col xs="12" md="4">
                            <h2>Alerts</h2>
                            <p>There are no alerts at this time.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    } 
    

}


/*export const Home = () => (
    <Container>
    <div className="col-12">
        <div className="image">
        <img src={Home1} alt="sefeee" width="100%"></img>
        </div>
        <Row className="justify-content-md-center" height='100'>
        <Col xs="12" md="4">
            <h2>Random Tips</h2>
            <p>Tips Here</p>
            </Col>
        <Col xs="12" md="4">
            <h2>About Us</h2>
            <p></p></Col>
        <Col xs="12" md="4">
            <h2>Alerts</h2>
            <p>There are no alerts at this time.</p>
            </Col>
        </Row>
    </div>
    </Container>
)*/