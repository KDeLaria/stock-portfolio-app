import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import StocksHistory from "./StocksHistory";

IgrFinancialChartModule.register();

class Trendline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.initData();
  }
  render() {
    return (
      <>
          <div className="container-fluid">
            <IgrFinancialChart
              chartType="Line"
              thickness={2}
              height="500px"
              width="1200px"
              chartTitle="Google vs Microsoft Changes"
              subtitle="Between 2013 and 2017"
              yAxisMode="Percent Change"
              yAxisTitle="Percent Changed"
              dataSource={this.state.data}
            />
          </div>
      </>
    );
  }

  initData() {
    StocksHistory.getMultipleStocks().then((stocks) => {
      this.setState({ data: stocks });
    });
  }
}

export default Trendline;
