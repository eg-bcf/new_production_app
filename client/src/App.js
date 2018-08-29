import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Capacity from './Components/Capacity';
import Assembly from './Components/Assembly';
import Productivity from './Components/Productivity';
import Shop from './Components/Shop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.renderModalCase = this.renderModalCase.bind(this);
  };

  renderModalCase = () => {
    console.log('Here')
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route path='/capacity' component={Capacity}/>
            <Route path='/productivity' component={Productivity}/>
            <Route path='/assembly' component={Assembly}/>
            <Route path='/shop' component={Shop}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
