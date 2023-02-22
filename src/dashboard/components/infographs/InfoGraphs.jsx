import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

import './infograph.scss'

export default class InfoGraphs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Sent', 'Open', 'Spam',],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
    };
  }

  render() {
    return (
      <div id="chart">
         <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
      </div>
    );
  }
}
  

