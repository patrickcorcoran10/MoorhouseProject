import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {},
        };

        // this.acceptCompanyName = this.acceptCompanyName.bind(this);
        // this.acceptClientName = this.acceptClientName.bind(this);
        // this.acceptEmployeeTotal = this.acceptEmployeeTotal.bind(this);
    };
    acceptCompanyName = event => {
        this.setState({
            inputs: {
            companyName: this.refs.companyName.value
            }
        });
        console.log(event.target.value)
    };
    acceptClientName = e => {
        this.setState({
            inputs: {
                clientName: this.refs.clientName.value
            }
        });
        console.log(e.target.value)
    };
    acceptClientEmail = e => {
        this.setState({
            inputs: {
                clientEmail: this.refs.clientEmail.value
            }
        });
        console.log(this.state)
    };

    saveInputs = event => {
        console.log('We are taking this and putting it in the database');
        axios.post('/api/moorhouseProject', {
            companyName: this.refs.companyName.value,
            clientName: this.refs.clientName.value,
            clientEmail: this.refs.clientEmail.value,
            totalEmployees: this.refs.totalEmployees.value,
            costPerEmployee: this.refs.costPerEmployee.value,
            dataCollectionTime: this.refs.dataCollectionTime.value,
            dataProcessingTime: this.refs.dataProcessingTime.value,
            securityComplienceTime: this.refs.securityComplienceTime.value,
            emailVolume: this.refs.emailVolume.value
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    };
    resetButton = e => {
        e.preventDefault()
        this.refs.companyName.value = '';
        this.refs.clientName.value = '';
        this.refs.clientEmail.value = '';
        this.refs.totalEmployees.value = '';
        this.refs.costPerEmployee.value = '';
        this.refs.dataCollectionTime.value = '';
        this.refs.dataProcessingTime.value = '';
        this.refs.securityComplienceTime.value = '';
        this.refs.emailVolume.value = '';
        this.setState({
            inputs: {}
        })
        console.log("We have reset the form");
    };
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-1'>

            </div>
            <div className='col-md-10'>
                <div className='header'>
                    <h4>Please enter data for your company</h4>
                </div>
            </div>
            <div className='col-md-1'>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-1'>

            </div>
            <div className='col-md-10'>
                <form>
                    <p>Company Name:</p>
                    <input ref='companyName' onChange={this.acceptCompanyName}/>
                    <p>Client Name:</p>
                    <input ref='clientName' onChange={this.acceptClientName}/>
                    <p>Client Email Address:</p>
                    <input ref='clientEmail' onChange={this.acceptClientEmail}/>
                    <p>Total Employees:</p>
                    <input type='range' className="form-control-range" id="formControlRange" defaultValue='0' ref='totalEmployees' onChange={this.acceptEmployeeTotal}/>
                    <p>Cost per Employee</p>
                    <input ref='costPerEmployee' type="currency" onChange={this.acceptCostPerEmployee}/>
                    <p>How would you characterize your company's time spent collecting data?</p>
                    <input ref='dataCollectionTime'/>
                    <p>How would you characterize your company's time spent processing data?</p>
                    <input ref='dataProcessingTime'/>
                    <p>How would you characterize your company's current level of data security and process compliance?</p>
                    <input ref='securityComplienceTime'/>
                    <p>How would you characterize your company's current email volume?</p>
                    <input ref='emailVolume'/>
                    <p>Plan Selection</p>
                    <input />
                    <hr />
                    <button onClick={this.saveInputs}>Calculate</button>
                    <button onClick={this.resetButton}>Reset Fields</button>
                </form>
            </div>
            <div className='col-md-1'>
                
            </div>
        </div>
      </div>
    )
  }
}

export default Form;
