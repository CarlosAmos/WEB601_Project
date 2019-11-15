import React from 'react';
//import styled from 'styled-components';
import Home1 from './Images/Home1.jpg';
import { Container, Col, Row, Button } from 'react-bootstrap';
//import TrailCard from '../Components/SingleTrailList';

/*const Styles = styled.div`
.image{
    width: 100%;
    height: 100;
    position: absolute;
    border: '4px solid black' ;
}
.ContentBoxes{
    border: '4px solid black' ;
}

}

`;*/

export class Trail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Trails:[]            
        }
    }

    componentDidMount() {
        fetch('http://localhost:4200/api/Trails/:ID')
        .then(res => res.json())
        .then(json => {
            this.setState({
                Trails: json,
                
            })
        });
    }  

render() {
    
    var { Trails } = this.state;

    return(
        <div>
            
        </div>
    )
}

}

