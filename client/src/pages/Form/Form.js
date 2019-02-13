import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {}
        }
        this.acceptCompanyName = this.acceptCompanyName.bind(this);
        this.acceptClientName = this.acceptClientName.bind(this);
        this.acceptEmployeeTotal = this.acceptEmployeeTotal.bind(this);

        
    };
    acceptCompanyName = event => {
        this.setState({
            inputs: {
            companyName: this.refs.companyName.value
            }
        });
        console.log(event.target.value)
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
                    <p>Total Employees:</p>
                    <input type='range' className="form-control-range" id="formControlRange" value='0' onChange={this.acceptEmployeeTotal}/>
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
