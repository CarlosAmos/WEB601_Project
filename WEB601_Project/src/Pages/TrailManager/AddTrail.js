import React from 'react';
//import styled from 'styled-components';
//import { Container, Col, Row, Button, Form, InputGroup,FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

/*const Styles = styled.div`
.description{
    width: 50%;
    height: 100;
    position: absolute;
    border: '4px solid black' ;
}

}

`;*/

export const AddTrail = () => (
<div>hello</div>
)

/*export default class AddTrail extends React.Component {
  constructor() {
    super()
    this.state = {
      fields: {Name: '',Location: '',Description: '',Difficulty: '',Length: ''},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.AddTrailForm = this.AddTrailForm.bind(this)

  }

  handleChange(e) {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({
      fields
    })
  }

  AddTrailForm(e) {
    e.preventDefault()
    if(this.validateForm()) {
      let fields = {}
      fields["Name"] = ""
      fields["Location"] = ""
      fields["Description"] = ""
      fields["Difficulty"] = ""
      fields["Length"] = ""
      this.setState({fields:fields})

      fetch('http://localhost:4200/api/Trails'), {
        method: 'post',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify({
          "Name": this.Name.value,
          "Location": this.Location.value,
          "Description": this.Description.value,
          "Difficulty": this.Difficulty.value,
          "Length": this.Length.value,
        })
      }
      console.log("Trail has been added")
      alert("Form submitted")          
    }
  }
  

  render(){
    return(
      <div>hello</div>
    )
  }



}*/