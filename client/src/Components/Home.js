import React, { Component } from 'react';
import { AreaChart } from 'react-easy-chart';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock_turns: [],
      on_time_delivery: [],
      first_pass_yield: [],
      warranty_returns: [],
      cap: [],
      prod: []
    }
  };

  componentDidMount() {
    let kpis = axios.get('http://localhost:5001/value/kpis')
    let productivity = axios.get('http://localhost:5001/value/capacity')
    let capacity = axios.get('http://localhost:5001/value/productivity')
    Promise.all([kpis, productivity, capacity])
      .then( result => {
        console.log(result)
        let kpi = JSON.parse(result[0].data)
        kpi = JSON.parse(kpi)
        console.log(kpi)
        let prods = JSON.parse(result[1].data)
        prods = JSON.parse(prods)
        console.log(prods)
        let new_prods = [prods["ERV"],prods["T2"],prods["T3"],prods["PINCH"],prods["PUMP"],prods["PISTON"]]
        let caps = JSON.parse(result[2].data)
        caps = JSON.parse(caps)
        console.log(caps)
        let new_caps = [caps["ERV"],caps["T2"],caps["T3"],caps["PINCH"],caps["PUMP"],caps["PISTON"]]
        this.setState({
          stock_turns: kpi["Stock_Turns"],
          on_time_delivery: kpi["Stock_Turns"],
          first_pass_yield: kpi["First_Pass_Yield"],
          warranty_returns: kpi["Warranty_Returns"],
          cap: new_caps,
          prod: new_prods
        })
      })
  }

  render() {
    return(
      <div className="container">
      <div className="side-nav">
        <Link to="/home">
          <div className="nav-item" style={{ backgroundColor: "GreenYellow"}}>
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
          <div className="content-area-1-container">
            <div className="content-area">
            <p>On Time Delivery</p>
            <AreaChart
              xType={'text'}
              axes
              width={350}
              height={250}
              interpolate={'cardinal'}
              data={[
                this.state.stock_turns
              ]}
            />
            </div>
          </div>
          <div className="content-area-2-container">
            <div className="content-area">
              <p>First Pass Yield</p>
              <AreaChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={[
                  this.state.first_pass_yield
                ]}
              />
            </div>
          </div>
          <div className="content-area-3-container">
            <div className="content-area">
              <p>Warranty Returns</p>
              <AreaChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={[
                  this.state.warranty_returns
                ]}
              />
            </div>
          </div>
          <div className="content-area-4-container">
            <div className="content-area">
              <p>Stock Turns</p>
              <AreaChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={[
                  this.state.stock_turns
                ]}
              />
            </div>
          </div>
          <div className="content-area-5-container">
            <div className="content-area">
              <p>Capacity</p>
              <AreaChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={
                  this.state.cap
                }
              />
            </div>
          </div>
          <div className="content-area-6-container">
            <div className="content-area">
              <p>Productivity</p>
              <AreaChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={
                  this.state.prod
                }
              />
            </div>
          </div>
      </div>
    )
  }
}

export default Home
