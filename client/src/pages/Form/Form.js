import React, { Component } from 'react'
import axios from 'axios';
// import {Link} from 'react-router-dom';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {},
        };
    };
    acceptCompanyName = event => {
        this.setState({
            inputs: {
            companyName: this.refs.companyName.value
            }
        });
    };
    acceptClientName = e => {
        this.setState({
            inputs: {
                clientName: this.refs.clientName.value
            }
        });
    };
    acceptClientEmail = e => {
        this.setState({
            inputs: {
                clientEmail: this.refs.clientEmail.value
            }
        });
    };
    acceptDataCollectionTime = e => {
        this.setState({ 
            inputs: {
                dataCollectionTime: this.refs.dataCollectionTime.value
            }
        })
    };
    acceptDataProcessingTime = e => {
        this.setState({
            inputs: {
                dataProcessingTime: this.refs.dataProcessingTime.value
            }
        })
    };
    acceptSecurityComplienceTime = e => {
        this.setState({
            inputs: {
                securityComplienceTime: this.refs.securityComplienceTime.value
            }
        })
    };
    acceptEmailVolume = e => {
        this.setState({
            inputs: {
                emailVolume: this.refs.emailVolume.value
            }
        })
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
            emailVolume: this.refs.emailVolume.value,
            // planSelect: this.refs.planSelect.value
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
        this.props.history.push('/dashboard');
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
            <div className='col-md-3'>
            </div>
            <div className='col-md-6'>
                <div className='header'>
                    <h4>Please enter data for your company</h4>
                </div>
                <p>Company Name:</p>
                <input ref='companyName' onChange={this.acceptCompanyName}/>
            </div>
            <div className='col-md-3'>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-1'>
            </div>
            <div className='col-md-5'>
                <p>Client Name:</p>
                <input ref='clientName' onChange={this.acceptClientName}/>
            </div>
            <div className='col-md-5'>
                <p>Client Email Address:</p>
                <input ref='clientEmail' onChange={this.acceptClientEmail}/>
            </div>
            <div className='col-md-1'>
            </div>
        </div>
        <hr/>
        <div className='row'>
            <div className='col-md-1'>
            </div>
            <div className='col-md-10'>
                <form>
                    <p>Total Employees:</p>
                    <input ref='totalEmployees' onChange={this.acceptEmployeeTotal}/>
                    <p>Cost per Employee per Hour</p>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                        </div>
                        <input onChange={this.acceptCostPerEmployee} ref='costPerEmployee' type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <div className="input-group-append">
                            <span className="input-group-text">.00</span>
                        </div>
                    </div>
                    <p>How would you characterize your company's time spent collecting data?</p>
                    <div className="input-group mb-3">
                        <select ref='dataCollectionTime' onChange={this.acceptDataCollectionTime} className="custom-select" id="inputGroupSelect02">
                            <option>Choose...</option>
                            <option value='.025'>Low</option>
                            <option value=".05">Medium</option>
                            <option value=".075">High</option>
                        </select>
                        <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                        </div>
                    </div>
                    <p>How would you characterize your company's time spent processing data?</p>
                    <div className="input-group mb-3">
                        <select ref='dataProcessingTime' onChange={this.acceptDataProcessingTime} className="custom-select" id="inputGroupSelect02">
                            <option>Choose...</option>
                            <option value=".025">Low</option>
                            <option value=".05">Medium</option>
                            <option value=".075">High</option>
                        </select>
                        <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                        </div>
                    </div>
                    <p>How would you characterize your company's current level of data security and process compliance?</p>
                    <div className="input-group mb-3">
                        <select ref='securityComplienceTime' onChange={this.acceptSecurityComplienceTime} className="custom-select" id="inputGroupSelect02">
                            <option>Choose...</option>
                            <option value=".01">Low</option>
                            <option value=".02">Medium</option>
                            <option value=".03">High</option>
                        </select>
                        <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                        </div>
                    </div>
                    <p>How would you characterize your company's current email volume?</p>
                    <div className="input-group mb-3">
                        <select ref='emailVolume' onChange={this.acceptEmailVolume} className="custom-select" id="inputGroupSelect02">
                            <option>Choose...</option>
                            <option value=".05">Low</option>
                            <option value=".075">Medium</option>
                            <option value=".1">High</option>
                        </select>
                        <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                        </div>
                    </div>
                    <hr />
                </form>
            </div>
            <div className='col-md-1'>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4'>
                <button onClick={this.saveInputs}>Calculate</button>
                <button onClick={this.resetButton}>Reset Fields</button>
            </div>
            <div className='col-md-4'>
                
            </div>
        </div>
      </div>
    )
  }
}

export default Form;
