import * as React from "react";
import { Chart, PieSeries } from "@devexpress/dx-react-chart-bootstrap4";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import { Animation } from "@devexpress/dx-react-chart";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const data = [
  { country: "Batch name", area: 15, color: "rgb(0, 112, 255)" },
  { country: "Batch name", area: 25, color: "red" },
  { country: "Batch name", area: 25, color: "rgb(36, 157, 61)" },
  { country: "Batch name", area: 25, color: "rgb(255, 185, 12)" },
];
export default class Chard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    console.log(data);
    const { data: chartData } = this.state;
    return (
      <React.Fragment>
        <div className="space-between">
          <div style={{ width: "50%", height: "160px", padding: "10px" }}>
            <Chart data={chartData}>
              <PieSeries valueField="area" argumentField="country" />
              <Animation />
            </Chart>
          </div>
          <List style={{ width: "40%" }}>
            {data.map((d, i) => {
              return (
                <ListItem key={i}>
                  <ListItemIcon>
                    <div
                      style={{
                        padding: "8px",
                        background: d.color,
                        borderRadius: "50%",
                      }}
                    ></div>
                  </ListItemIcon>
                  <ListItemText primary={d.country}></ListItemText>
                </ListItem>
              );
            })}
          </List>
        </div>
      </React.Fragment>
    );
  }
}
