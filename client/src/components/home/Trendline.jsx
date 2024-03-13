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
    if (
      this.props.symbol !== prevProps.symbol ||
      this.props.portfolioArr !== prevProps.portfolioArr
    ) {
      this.initData();
    }
  }

  initData() {
    if (this.props.symbol) {
      StocksHistory.getStock(this.props.symbol).then((stocks) => {
        this.setState({ data: stocks });
      });
    } else if (this.props.portfolioArr && this.props.portfolioArr.length > 0) {
      PortfolioHistory.getMultipleStocks(this.props.portfolioArr).then(
        (stocks) => {
          this.setState({ data: stocks });
        }
      );
    }
  }

  render() {
    const title = this.props.symbol
      ? `${this.props.symbol} Stock Prices`
      : "Portfolio Stock Prices";
      console.log("Here comes to state data:")
      let dateOfLastElement;
      if (this.state.data && this.state.data.length > 0) {
      const lastElement = this.state.data[0];
      dateOfLastElement = lastElement.date;
      } else {
        console.log("Ruh roh, Raggy!");
      }
      const range = `${dateOfLastElement} to Present`;

    return (
      <>
        <div
          className="container-fluid"
          style={{ position: "relative", height: "50vh" }}
        >
          <div
            id="loading-overlay"
            className="hidden"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 5,
            }}
          >
            <button
              id="loading-swirl"
              type="button"
              className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-green-600 hover:bg-green-500 transition ease-in-out duration-150 cursor-not-allowed"
              disabled=""
              style={{
                position: "relative",
                zIndex: 10,
              }}
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Getting your stock...
            </button>
          </div>
          <IgrFinancialChart
            chartType="Line"
            thickness={2}
            height="50vh"
            width="100%"
            chartTitle={title}
            subtitle={range}
            dataSource={this.state.data}
          />
        </div>
      </>
    );
  }
}

export default Trendline;
