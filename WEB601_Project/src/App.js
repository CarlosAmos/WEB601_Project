import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Pages/Home';
import {Trail} from './Pages/Trail';
import {Map} from './Pages/Map';
import {Planner} from './Pages/Planner';
import {Events} from './Pages/Events';
import {TrailManager} from './Pages/TrailManager/TrailManager';
import {AddTrail} from './Pages/TrailManager/AddTrail';
import { Layout } from './Components/Layout';
import {NavBar } from './Components/NavBar';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        contacts: []
    }
}

componentDidMount(){
  this.fetchData();
}

fetchData(){

}

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Trail" component={Trail} />
            <Route path="/Map" component={Map} />
            <Route path="/Planner" component={Planner} />
            <Route path="/Events" component={Events} />
            <Route path="/TrailManager/TrailManager" component={TrailManager} />
            <Route path="/TrailManager/AddTrail" component={AddTrail} />

          </Switch>
        </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
