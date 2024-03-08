import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import StocksHistory from "../StocksHistory";
import PortfolioHistory from "../PortfolioHistory";

IgrFinancialChartModule.register();

class Trendline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.initData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.symbol !== prevProps.symbol || this.props.portfolioArr !== prevProps.portfolioArr) {
      this.initData();
    }
  }

  initData() {
    if (this.props.symbol) {
      StocksHistory.getStock(this.props.symbol).then((stocks) => {
        this.setState({ data: stocks });
      });
    } else if (this.props.portfolioArr && this.props.portfolioArr.length > 0) {
      PortfolioHistory.getStock(this.props.portfolioArr).then((stocks) => {
        this.setState({ data: stocks });
      });
    }
  }

  render() {
    const title = this.props.symbol ? `${this.props.symbol} Stock Prices` : "Portfolio Stock Prices";
    
    return (
      <>
        <div className="container-fluid">
          <IgrFinancialChart
            chartType="Line"
            thickness={2}
            height="50vh"
            width="100%"
            chartTitle={title}
            subtitle="Q4 2023 to Present"
            dataSource={this.state.data}
          />
        </div>
      </>
    );
  }
}

export default Trendline;
