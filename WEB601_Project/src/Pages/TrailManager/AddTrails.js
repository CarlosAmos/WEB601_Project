import React, {Component} from 'react';


export class AddTrails extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:4200/api/Trails', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "Name": this.Name.value,
                "Location": this.Location.value,
                "Description": this.Description.value,
                "Difficulty": this.Difficulty.value,
                "Length": this.Length.value,
            })            
        });
        console.log("Trail has been added")
    }

    render() {
        
        return(  
                   
            <div>
                
                <h5>Name</h5>
                <input ref={(ref) => {this.Name = ref}} type="text" id="Name" name="Name"/>
                <h5>Location</h5>
                <input ref={(ref) => {this.Location = ref}} type="text" id="Location" name="Location"/>
                <h5>Description</h5>
                <input ref={(ref) => {this.Description = ref}} type="text" id="Description" name="Description"/>
                <h5>Difficulty</h5>
                <input ref={(ref) => {this.Difficulty = ref}} type="text" id="Difficulty" name="Difficulty"/>
                <h5>Length</h5>
                <input ref={(ref) => {this.Length = ref}} type="text" id="Length" name="Length"/>

                <button id="Submit" type="submit" onSubmit={this.handleSubmit}>Add Trail</button>
            </div>
        )
    }
}