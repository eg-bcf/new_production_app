import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Mills from './mills';
import Lathes from './lathes';

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      mills: [],
      lathes: [],
      intervalId: 0,
      currentCount: 5,
      viewState: 'MILLS'
    };

    this.fetchData = this.fetchData.bind(this);
    this.timer = this.timer.bind(this)
    this.setMills = this.setMills.bind(this);
    this.setLathes = this.setLathes.bind(this);
  }


  componentDidMount() {
    var intervalId = setInterval(this.timer, 300000);
    this.setState({intervalId: intervalId, currentCount: 5});
    this.fetchData()
  }

  componentWillUnmount() {
     // use intervalId from the state to clear the interval
     clearInterval(this.state.intervalId);
  }

  timer() {
    var newCount = this.state.currentCount - 1;
    if(newCount >= 0) {
        this.setState({ currentCount: newCount });
    } else {
        this.setState({currentCount: 300 });
        this.fetchData();
        //clearInterval(this.state.intervalId);
    }
  }

  fetchData = () => {
    return (//axios.get('http://api.bcfmanufacturing.com/manufacturing/shop', {headers: {authorization: 'cschmidtbcf'}})
    axios.get('http://localhost:5001/value/shop', {headers: {authorization: 'cschmidtbcf'}})
      .then((response) => {
        let res = JSON.parse(response.data)
        res = JSON.parse(res)
        if (res["LATHES"] !== undefined && res["MILLS"] !== undefined) {
          this.setState({ lathes: res.LATHES, mills: res.MILLS })
        }
        else if (res["LATHES"] !== undefined && res["MILLS"] === undefined) {
          this.setState({ lathes: res.LATHES, mills: [] })
        }
        else if (res["LATHES"] === undefined && res["MILLS"] !== undefined) {
          this.setState({ lathes: [], mills: res.MILLS })
        }
        else {
          this.setState({ lathes: [], mills: [] })
        }
      })
      .catch(function (error) {
        console.log(error);
      }))
  }

  setLathes = (e) => {
    e.preventDefault();
    return this.setState({ viewState: 'LATHES' })
  }

  setMills = (e) => {
    e.preventDefault();
    return this.setState({ viewState: 'MILLS' })
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
              <div className="nav-item" style={{ backgroundColor: "GreenYellow"}}>
                <p>Shop Schedule</p>
              </div>
            </Link>
            <Link to="/assembly">
              <div className="nav-item">
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
          <h1 className="header">Bio Chem Shop Schedule</h1>
          <div className="shopHeaderValues">
            <a onClick={this.setMills}>MILLS</a>
            <a onClick={this.setLathes}>LATHES</a>
          </div>
          { this.state.viewState === 'MILLS' ?
            <div>
              <h2 style={headerStyle}>Mills</h2>
              <Mills mills={this.state.mills} />
            </div>
            :
            <div>
              <h2 style={headerStyle}>Lathes</h2>
              <Lathes lathes={this.state.lathes} />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Shop;
