import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

export default class LineChartInf extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
          options: {
            chart: {
              type: 'area',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2.5,
              colors: ['#008FFB', '#00E396', '#CED4DC'],
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
              title: {
                // text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
        
        
        };
      }

    

      render() {
        return (
          

    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={250} />
</div>
        )
}
}
