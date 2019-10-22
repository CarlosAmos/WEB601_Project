import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Pages/Home';
import {Trail} from './Pages/Trail';
import {Map} from './Pages/Map';
import {Planner} from './Pages/Planner';
import {Events} from './Pages/Events';
import {AddTrail} from './Pages/TrailManager/AddTrail';
import {ManageTrail} from './Pages/TrailManager/ManageTail';
import {DeleteTrail} from './Pages/TrailManager/DeleteTrail';
import {test} from './Pages/TrailManager/test';
import { Layout } from './Components/Layout';
import {NavBar } from './Components/NavBar';

class App extends Component {

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
            <Route path="/TrailManager/AddTrail" component={AddTrail} />
            <Route path="/TrailManager/ManageTail" component={ManageTrail} />
            <Route path="/TrailManager/DeleteTrail" component={DeleteTrail} />
            <Route path="/TrailManager/test" component={test} />

          </Switch>
        </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
