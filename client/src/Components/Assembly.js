import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Line from './Line';

class Assembly extends Component {
  constructor() {
    super();
    this.state = {
      keys: {
        iterator: 0,
        values: []
      },
      items: {},
      intervalId: 0,
      currentCount: 5,
      viewState: '',
      viewIntervalId: 0,
      currentViewCount: 5,
    };

    this.fetchData = this.fetchData.bind(this);
    this.setViewState = this.setViewState.bind(this);
    this.timer = this.timer.bind(this)
    this.viewTimer = this.viewTimer.bind(this);
  }


  componentDidMount() {
    var intervalId = setInterval(this.timer, 300000);
    var viewIntervalId = setInterval(this.viewTimer, 30000)
    this.setState({intervalId: intervalId, currentCount: 5, viewIntervalId: viewIntervalId, currentViewCount: 5 });
    this.fetchData()
  }

  componentWillUnmount() {
     clearInterval(this.state.intervalId);
  }

  timer() {
    var newCount = this.state.currentCount - 1;
    if(newCount >= 0) {
        this.setState({ currentCount: newCount });
    } else {
        this.setState({currentCount: 300 });
        this.fetchData();
    }
  }

  fetchData = () => {
    return (
    axios.get('http://localhost:5001/value/assembly')
      .then((response) => {
        console.log(response)
        let res = JSON.parse(response.data)
        res = JSON.parse(res)
        let resKeys = Object.keys(res)
        let currentKeyState = {...this.state.keys}
        currentKeyState.values = resKeys
        this.setState({
          items: res,
          keys: currentKeyState,
          viewState: resKeys[0]
        })
      })
      .catch(function (error) {
        console.log(error);
      }))
  }

  setViewState = (e, val) => {
    e.preventDefault();
    this.setState({
        viewState: val
    })
  }

  viewTimer = () => {
    let currentKeyState = {...this.state.keys}
    if (currentKeyState.iterator < currentKeyState.values.length-1) {
      currentKeyState.iterator += 1;
    }
    else {
      currentKeyState.iterator = 0;
    }
    this.setState({
      viewState: currentKeyState.values[currentKeyState.iterator],
      keys: currentKeyState
    })
  }

  render() {
    var headerStyle = {
      textAlign: 'center',
    }
    return (
      <div className="container1">
          <div className="side-nav1">
            <Link to="/home">
              <div className="nav-item1">
                <p>Home</p>
              </div>
            </Link>
            <Link to="/shop">
              <div className="nav-item">
                <p>Shop Schedule</p>
              </div>
            </Link>
            <Link to="/assembly">
              <div className="nav-item" style={{ backgroundColor: "GreenYellow"}}>
                <p>Assembly Schedule</p>
              </div>
            </Link>
            <Link to="/capacity">
              <div className="nav-item">
                <p>Capacity</p>
              </div>
            </Link>
            <Link to="/productivity">
              <div className="nav-item">
                <p>Productivity</p>
              </div>
            </Link>
            <Link to="/home">
              <div className="nav-item">
                <p>Shipping</p>
              </div>
            </Link>
          </div>
        <div className="tableArea">
          <h1 className="header">Assembly Schedule</h1>
          <div className="headerValues">
          { this.state.keys.values.length > 1 ?
            this.state.keys.values.map( val => {
              return(
                <a className="selectedValue"  value={val} onClick={(e) => this.setViewState(e, val)}>{val}</a>
              )
            })
          :
          <h2 style={headerStyle} onClick={this.setLathes}>Loading...</h2>
          }
          </div>
          { this.state.viewState !== '' ?
            <div className="selectedValue">
              <h2>{this.state.viewState}</h2>
            <div>
              <Line items={this.state.items[this.state.viewState]}/>
            </div>
            </div>
            :
            <div>
              <h2 style={headerStyle}>Loading...</h2>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Assembly;
