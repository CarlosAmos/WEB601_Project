import React, {Component} from 'react';

import { Container, Col, Row, Button, Form, InputGroup,FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

var TrailArray = [];

export class AddTrail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fields: {Name:'',Location:'',Description:'',Difficulty:'',Length:''},
      errors: {}
    }
    
    this.submitHandler = this.submitHandler.bind(this);


    /*this.state = {
      Name: '',
      Location: '',
      Description: '',
      Difficulty: '',
      Length: ''
    }*/
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

 submitHandler(event) {
    event.preventDefault()

    let fields = {}
    fields["Name"] = ""
    fields["Location"] = ""
    fields["Description"] = ""
    fields["Difficulty"] = ""
    fields["Length"] = ""
    this.setState({fields:fields})

      fetch('http://localhost:4200/api/Trails' , {
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
    //console.log(this.state)
    console.log("Trail has been added")
    }

  render(){

    function dataHandle() {
      this.props.callbackFromParent(TrailArray);
    }

    //const{Name,Location,Description,Difficulty,Length} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <h5>Name</h5>
            <input type="text" name="Name" id="Name" value={this.Name} onChange={this.changeHandler}/>
          </div>
          <div>
            <h5>Location</h5>
            <input type="text" name="Location" id="Location" value={this.Location} onChange={this.changeHandler}/>
          </div>
          <div>
            <h5>Description</h5>
            <input type="text" name="Description" id="Description" value={this.Description} onChange={this.changeHandler}/>
          </div>
          <div>
            <h5>Difficulty</h5>
            <input type="text" name="Difficulty" id="Difficulty" value={this.Difficulty} onChange={this.changeHandler}/>
          </div>
          <div>
            <h5>Length</h5>
            <input type="text" name="Length" id="Length" value={this.Length} onChange={this.changeHandler}/>
          </div>
          <button id="Submit" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}



