import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import StocksHistory from "../StocksHistory";

IgrFinancialChartModule.register();

class Trendline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.initData();
  }

  initData() {
    StocksHistory.getStock(this.props.symbol).then((stocks) => {
      this.setState({ data: stocks });
    });
  }

  render() {
    return (
      <>
          <div className="container-fluid">
            <IgrFinancialChart
              chartType="Line"
              thickness={2}
              height="50vh"
              width="100%"
              chartTitle={`${this.props.symbol} Stock Prices`}
              subtitle="Q4 2023 to Present"
              dataSource={this.state.data}
            />
          </div>
      </>
    );
  }
}

export default Trendline;
