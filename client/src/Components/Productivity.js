import React, { Component } from 'react';
import { AreaChart } from 'react-easy-chart';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Productivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erv: [],
      pinch: [],
      piston: [],
      pump: [],
      t2: [],
      t3: []
    }
  };

  componentDidMount() {
    axios.get('http://localhost:5001/value/productivity')
      .then( result => {
        let caps = JSON.parse(result.data)
        caps = JSON.parse(caps)
        this.setState({
          erv: caps["ERV"],
          pinch: caps["PINCH"],
          piston: caps["PISTON"],
          pump: caps["PUMP"],
          t2: caps["T2"],
          t3: caps["T3"]
        })
      })
  }

  render() {
    return(
      <div className="container">
          <div className="side-nav">
            <Link to="/home">
              <div className="nav-item">
                <p>Home</p>
              </div>
            </Link>
            <Link to="/shop">
              <div className="nav-item">
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
              <div className="nav-item" style={{ backgroundColor: "GreenYellow"}}>
                <p>Productivity</p>
              </div>
            </Link>
            <Link to="/home">
              <div className="nav-item">
                <p>Shipping</p>
              </div>
            </Link>
          </div>
          <div className="content-area-1-container">
            <div className="content-area">
            <p>ERV</p>
            <AreaChart
              xType={'text'}
              axes
              width={350}
              height={250}
              interpolate={'cardinal'}
              data={[
                this.state.erv
              ]}
            />
            </div>
          </div>
          <div className="content-area-2-container">
            <div className="content-area">
              <p>PUMP</p>
              <AreaChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={[
                  this.state.pump
                ]}
              />
            </div>
          </div>
          <div className="content-area-3-container">
            <div className="content-area">
              <p>PISTON</p>
              <AreaChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={[
                  this.state.piston
                ]}
              />
            </div>
          </div>
          <div className="content-area-4-container">
            <div className="content-area">
              <p>PINCH</p>
              <AreaChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={[
                  this.state.pinch
                ]}
              />
            </div>
          </div>
          <div className="content-area-5-container">
            <div className="content-area">
              <p>T2</p>
              <AreaChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={[
                  this.state.t2
                ]}
              />
            </div>
          </div>
          <div className="content-area-6-container">
            <div className="content-area">
              <p>T3</p>
              <AreaChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={[
                  this.state.t3
                ]}
              />
            </div>
          </div>
      </div>
    )
  }
}

export default Productivity
