import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

 class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                labels: ['pizza', 'subs', 'coffee', 'tea', 'cookies'],
                dataSets: [{
                    label: "Menu Orders",
                    data: [
                        30,
                        6,
                        69,
                        20,
                        9
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
      <div className="graph">
        <Bar 
            data={this.state.inputs}
            options = {{
                maintainAspectRatio: false
            }}
        />
      </div>
    )
  }
}

export default Display;
