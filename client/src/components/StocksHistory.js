class StocksHistory {
  static async getMultipleStocks(symbol) {
      const dataSources = [
          await this.getStock(symbol),
      ];

      return dataSources;
  }

  static async getStock(symbol) {
        document.querySelector('#loading-overlay').classList.remove('hidden');
        let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=Z4BJOOT987MHX8OW`;
        let response = await fetch(url);
        let jsonData = await response.json();
        console.log(jsonData);
        let stockData = this.convertData(jsonData["Time Series (Daily)"]);
        stockData.__dataIntents = {
          close: [`SeriesTitle/${symbol}`]
        };
        document.querySelector('#loading-overlay').classList.add('hidden');
        return stockData;
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

      console.log(stockItems)

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

export default StocksHistory;
export { StockItem };