import React, {Component} from 'react';

export class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            trails: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:4200/api/Trails')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: false,
                trails: json,
            })
        });
    }  

    render() {
        if(this.state.isLoaded == true) {
            return(
              <p>Loading...</p>
            );
        }    
        return (
            <h1>Hi</h1>
        );         
    }
}

