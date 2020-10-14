import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";

class App extends Component {
	state = {
		options: {
      "title": "Donut",
      "resizable": true,
      "donut": {
        "center": {
          "label": "Data"
        }
      },
      "height": "500px"
    }
	};

	render = () => (
		<DonutChart
			data={this.props.data}
			options={this.state.options}>
		</DonutChart>
	);
}

const data = [
  {
    "group": "Group 1",
    "value": 200
  },
  {
    "group": "Group 2",
    "value": 200
  },
  {
    "group": "Group 3",
    "value": 500
  },
  {
    "group": "Group 4",
    "value": 1000
  },
];

ReactDOM.render(<App data={data}/>, document.getElementById("root"));
  