import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import '../Display/Display.css';
import axios from 'axios';

 class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            graphInputs: {
                labels: ['Data Collection Savings', 'Data Processing Savings', 'Complience and Security Savings', 'Automation Savings'],
                dataSets: [{
                    label: "Menu Orders",
                    data: [
                        30,
                        6,
                        69,
                        20,
                    ],
                    blackgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
                    ]
                }]
            },
            inputs: {},
        };
    }

    componentWillMount() {
        console.log("We are mounted on the display page with record: ", this.props.id)
        axios.get('/api/display' + this.props.id)
        .then(res => {
            let selected = res.data[0];
            console.log(selected);
            this.setState({
                inputs: selected
            });
            console.log(this.state);
        })
    };

    
  render() {
    const style = {
        container: {
            paddingTop: '80px'
        }
    }
    const assumptions = {
        emailCostPerEmployee: 1800,
        chanceOfDataBreach: .025,
        dataBreachCost: 1600000,
        collectData: .17,
        processData: .16,
        annualHours: 2000
      };
    return (
         <div className='container' style={style.container}>
            <div className='row'>
                <div className='col-md-1'>
                </div>
                <div className='col-md-10'>
                    <h6>Company Graphical Display</h6>
                </div>
                <div className='col-md-1'>
                </div>
            </div>
            <hr/>
            <div className='row'>
                <div className='col-md-1'>
                </div>
                <div className='col-md-2' id='numbers'>
                    <strong>Annual Subscription Cost:</strong>
                    <p>Data Collection Savings: ${this.state.inputs.dataCollectionTime*((assumptions.collectData * assumptions.annualHours) * parseInt(this.state.inputs.totalEmployees)) * (parseInt(this.state.inputs.costPerEmployee))}</p>
                    <p>Data Processsing Savings: ${this.state.inputs.dataProcessingTime * parseInt(this.state.inputs.costPerEmployee) * (this.state.inputs.totalEmployees * (assumptions.processData * assumptions.annualHours))}</p>
                    <p>Complience and Security Savings: ${this.state.inputs.securityComplienceTime * (assumptions.dataBreachCost * assumptions.chanceOfDataBreach)}</p>
                    <p>Automation Savings: ${this.state.inputs.emailVolume * (this.state.inputs.totalEmployees * assumptions.emailCostPerEmployee)}</p>
                    <strong>Annual Catalytic Value</strong>
                    <hr/>
                    <strong>ROI</strong>
                </div>
                <div className='col-md-8'>
                    <div className="graph">
                        <Bar 
                            data={this.state.graphInputs}
                            options = {{
                                maintainAspectRatio: true
                            }}
                        />
                    </div>
                </div>
                <div className='col-md-1'>
                </div>
            </div>
        </div>
    )
  }
}

export default Display;
