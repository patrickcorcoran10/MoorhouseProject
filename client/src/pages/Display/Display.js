import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

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
        };
    }

    
  render() {
    return (
        <div className='container'>
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
                    <p>Data Collection Savings</p>
                    <p>Data Processsing Savings</p>
                    <p>Complience and Security Savings</p>
                    <p>Automation Savings</p>
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
