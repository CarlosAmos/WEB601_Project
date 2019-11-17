import React from 'react'
import MountainBiking1 from './Images/MountainBiking.jpg';
import { Container, Col, Row } from 'react-bootstrap';
import './Events.css'

export class Events extends React.Component {
constructor(props){
    super(props);
    this.state = {
        Events:[],
    };
}

componentDidMount() {
    fetch('http://localhost:4200/api/Events')
    .then(res => res.json())
    .then(json => {
        this.setState({
            Events: json,
            isLoaded: true,
        })
    });
}  

render() {

var { Events } = this.state;

return (
    <div id="Container">
        <h2> Events </h2>
        {Events.map(Event => (
            <Container>
                <br/>
                <Row>                    
                <Col md='2' xs='12'>
                <img src={MountainBiking1} alt="sefeee" width="80%"></img>
                </Col>
                <Col md='1' xs='12'>
                    <div key={Event.ID}>
                        <h4>{Event.Date}</h4>
                    </div>
                </Col>
                <Col md='8' xs='12'>
                    <div key={Event.ID}>
                    <h4 >{Event.Name} </h4>
                    <p> {Event.Description} </p>
                    </div>            
                </Col>
                <Col md='1' xs='12'>
                    
                </Col>                
                </Row>                
            </Container>    
        ))};
    </div>
)}

}