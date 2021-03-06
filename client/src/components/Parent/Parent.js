import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from "../../pages/Home/Home";
import Display from "../../pages/Display/Display";
import Form from '../../pages/Form/Form';
import View from '../../pages/View/View';

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                id: '',
                companyName: '',
                clientName: '',
                clientEmail: '',
                totalEmplyees: '',
                costPerHour: '',
                dataCollectionTime: '',
                dataProcessingTime: '',
                securityComplienceTime: '',
                emailVolume: ''
            }
        }
        
    }
    onUpdate = idChosen => {
        this.setState({
            inputs: {
                id: idChosen,
                companyName: '',
                clientName: '',
                clientEmail: '',
                totalEmplyees: '',
                costPerHour: '',
                dataCollectionTime: '',
                dataProcessingTime: '',
                securityComplienceTime: '',
                emailVolume: ''
            }
        })
    }
    ROI = idChosen => {
        this.setState({
            inputs: {
                id: idChosen,
            }
        })
    }

  render() {
    return (
      <div className='parent'>
        <Route exact path='/dashboard' render={(props) => <Home {...props} click={this.onUpdate.bind(this)} />} />
        <Route exact path='/form' component={Form} />
        <Route exact path='/view' render={(props) => <View {...props} id={this.state.inputs.id} click={this.ROI.bind(this)}/>} />
        <Route exact path='/display' render={(props) => <Display {...props} id={this.state.inputs.id} />} />
      </div>
    )
  }
}
