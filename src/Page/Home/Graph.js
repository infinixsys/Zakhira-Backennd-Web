import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan","Feb","Mar","Apr","may","jun","jul","aug","sep","oct","nov","dec"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [10, 20, 35, 40, 50, 60, 70,75 ,80,90,95,100]
        }
      ]
    };
  }

  render() {
    return (
      <div className="Graph">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
            //   width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;