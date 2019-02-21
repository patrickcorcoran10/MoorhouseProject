import React, { Component } from 'react';
import axios from 'axios';
import '../View/View.css';

export default class View extends Component {
  constructor(props) {
    super(props);

    this.state={
      inputs: {}
    };
  };

  componentWillMount() {
    console.log('we are mounted on the view page for record number: ', this.props.id);
    axios.get('/api/view' + this.props.id)
    .then(res => {
      let selected = res.data[0]
      console.log(selected);
      this.setState({
        inputs: selected
      });
      console.log(this.state)
    })
  };

  render() {
    const style = {
      container: {
        paddingTop: '80px'
      }
    };
    const assumptions = {
      
      emailCostPerEmployee: 1800,
      chanceOfDataBreach: .025,
      dataBreachCost: 1600000,
      collectData: .17,
      processData: .16,
      annualHours: 2000
    };
    


    return (
      <div style={style.container} className='container'>
        <div className="row" id="header">
          <div className='col-md-1'>
          </div>
          <div className="col-md-10">
              <h4>The Employee Experience ROI Calculator</h4>
              <br />
              <h6>{this.state.inputs.companyName}</h6>
              <br />
              <p>Client Name: {this.state.inputs.clientName}</p>
              <p>Client Email: {this.state.inputs.clientEmail}</p>
          </div>
          <div className='col-md-1'>
          </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-md-1'>
        </div>
        <div className='col-md-5' id='tableLeft'>
          <p>Time Spent Collecting Data</p>
        </div>
        <div className='col-md-5' id='tableRight'>
          <div className='row'>
            <div className='col-sm-8'>
              <p>Time Spent Collecting Data</p>
              <p>Annual Hours</p>
              <p>Hours spent per worker collecting data</p>
              <p>Total Workers</p>
              <p>Total hours spent collecting data</p>
              <p>Cost per hour</p>
              <p>Total cost of collecting data</p>
              <p>Catalytic savings</p>
              <strong>Data Collection Savings</strong>
            </div>
            <div className='col-sm-4'>
              <p>{assumptions.collectData}</p>
              <p>{assumptions.annualHours}</p>
              <p>{assumptions.collectData * assumptions.annualHours}</p>
              <p>{this.state.inputs.totalEmployees}</p>
              <p>{(assumptions.collectData * assumptions.annualHours) * parseInt(this.state.inputs.totalEmployees)}</p>
              <p>${this.state.inputs.costPerEmployee}</p>             
              <p>${((assumptions.collectData * assumptions.annualHours) * parseInt(this.state.inputs.totalEmployees)) * parseInt(this.state.inputs.costPerEmployee)}</p>
              <p>%</p>
              <strong>$</strong>
            </div>
          </div>
        </div>
        <div className='col-md-1'>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-md-1'>
        </div>
        <div className='col-md-5' id='tableLeft'>
          <p>Time Spent Processing Data</p>
        </div>
        <div className='col-md-5' id='tableRight'>
          <div className='row'>
            <div className='col-sm-8'>
              <p>Time spent processing data</p>
              <p>Annual Hours</p>
              <p>Hours spent per worker processing data</p>
              <p>Total Workers</p>
              <p>Total hours spent processing data</p>
              <p>Cost per hour</p>
              <p>Total cost of processing data</p>
              <p>Catalytic savings</p>
              <strong>Data Collection Savings</strong>
            </div>
            <div className='col-sm-4'>
              <p>{assumptions.processData}</p>
              <p>{assumptions.annualHours}</p>
              <p>{assumptions.processData * assumptions.annualHours}</p>
              <p>{this.state.inputs.totalEmployees}</p>
              <p>{this.state.inputs.totalEmployees * (assumptions.processData * assumptions.annualHours)}</p>
              <p>${this.state.inputs.costPerEmployee}</p>
              <p>${parseInt(this.state.inputs.costPerEmployee) * (this.state.inputs.totalEmployees * (assumptions.processData * assumptions.annualHours))}</p>
              <p>%</p>
              <strong>$</strong>
            </div>
          </div>
        </div>
        <div className='col-md-1'>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-md-1'>
        </div>
        <div className='col-md-5' id='tableLeft'>
          <p>Compliance Savings and Improved Security</p>
        </div>
        <div className='col-md-5' id='tableRight'>
          <div className='row'>
            <div className='col-sm-8'>
              <p>Average cost of data breach</p>
              <p>Chances of data breach</p>
              <p>Total data breach costs</p>
              <p>Catalytic savings</p>
              <strong>Compliance and Security Savings</strong>
            </div>
            <div className='col-sm-4'>
              <p>${assumptions.dataBreachCost}</p>
              <p>{assumptions.chanceOfDataBreach}</p>
              <p>{assumptions.dataBreachCost * assumptions.chanceOfDataBreach}</p>
              <p>%</p>
              <strong>$</strong>
            </div>
          </div>
        </div>
        <div className='col-md-1'>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-md-1'>
        </div>
        <div className='col-md-5' id='tableLeft'>
          <p>Productivity increase via automation</p>
        </div>
        <div className='col-md-5' id='tableRight'>
          <div className='row'>
            <div className='col-sm-8'>
              <p>Total users</p>
              <p>Cost of unnecessary emails per user</p>
              <p>Total email costs</p>
              <p>Catalytic savings</p>
              <strong>Automation Savings</strong>
            </div>
            <div className='col-sm-4'>
              <p>{this.state.inputs.totalEmployees}</p>
              <p>${assumptions.emailCostPerEmployee}</p>
              <p>${this.state.inputs.totalEmployees * assumptions.emailCostPerEmployee}</p>
              <p>%</p>
              <strong>$</strong>
            </div>
          </div>
        </div>
        <div className='col-md-1'>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-md-3'>
        </div>
        <div className='col-md-6'>
          <button onClick={this.ROI}>View ROI</button>
        </div>
        <div className='col-md-3'>
        </div>
      </div>
    </div>
    )
  }
}
