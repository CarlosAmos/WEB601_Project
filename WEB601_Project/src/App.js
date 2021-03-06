import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Pages/Home/Home';
import {Trail} from './Pages/Trail/Trail';
import {TrailView} from './Pages/Trail/TrailView/TrailView';
import {Map} from './Pages/Map/Map';
import {Planner} from './Pages/Planner/Planner';
import {Events} from './Pages/Events/Events';
import {TrailHome} from './Pages/TrailManager/TrailHome';
import {TrailPicker} from './Pages/TrailManager/TrailPicker';
import {ManageTrails} from './Pages/TrailManager/ManageTrails';
import {AddTrails} from './Pages/TrailManager/AddTrails';
import {Login} from './Pages/Login';
import {Register} from './Pages/Register';

import { Layout } from './Components/Layout';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar sticky="top"/>
        <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home/Home" component={Home} />
            <Route path="/Trail/Trail" component={Trail} />
            <Route path="/Map/Map" component={Map} />
            <Route path="/Planner/Planner" component={Planner} />
            <Route path="/Events/Events" component={Events} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/TrailManager/TrailHome" component={TrailHome} />
            <Route path="/Trail/TrailView/TrailView/:id" component={TrailView} />
            <Route path="/TrailManager/TrailPicker" component={TrailPicker} />
            <Route path="/TrailManager/AddTrails" component={AddTrails} />
            <Route path="/TrailManager/ManageTrails/:id" component={ManageTrails} />
          </Switch>
        </Router>
        <br/>
        <Footer/>
        </Layout>
        
      </React.Fragment>
    );
  }
}

export default App;
