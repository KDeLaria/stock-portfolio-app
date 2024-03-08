class PortfolioHistory {
    // gets stock OHLC prices for multiple stocks
    static async getMultipleStocks(portfolioArr) {
        // getting prices of multiples stocks asynchronously
        const dataSources = [
            await this.getStock(portfolioArr),
        ];
  
        return dataSources;
    }
  
    // gets IBM stock OHLC prices from a JSON string
    static async getStock(portfolioArr) {
        for (let i in portfolioArr) {
            let symbol = portfolioArr[i];
            let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=SK3QDQ16A8J9OKV6`;
            let response = await fetch(url);
            let jsonData = await response.json();
            let stockData = this.convertData(jsonData["Time Series (Daily)"]);
            // setting data intent for Series Title, e.g., FinancialChart usage
            stockData.__dataIntents = {
                close: [`SeriesTitle/Portfolio`]
            };

            console.log(stockData[i]);
        }
    }

    static convertData(jsonData) {
        let stockItems = [];
    
        for (let date in jsonData) {
            let data = jsonData[date];
            let item = {};
            item.date = new Date(date);
            item.open = parseFloat(data["1. open"]);
            item.high = parseFloat(data["2. high"]);
            item.low = parseFloat(data["3. low"]);
            item.close = parseFloat(data["4. close"]);
            item.volume = parseInt(data["5. volume"], 10);
            stockItems.push(item);
        }
        stockItems.sort((a, b) => a.date - b.date);
    
        return stockItems;
    }

  };
  
  class StockItem {
    constructor(open, close, high, low, volume, date) {
        this.open = open;
        this.close = close;
        this.high = high;
        this.low = low;
        this.volume = volume;
        this.date = date;
    }
  };
  
  export default PortfolioHistory;
  export { StockItem };