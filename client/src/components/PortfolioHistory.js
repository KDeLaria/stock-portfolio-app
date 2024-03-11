class PortfolioHistory {
    static async getMultipleStocks(symbol) {
        document.querySelector('#loading-overlay').classList.remove('hidden');
        const promises = symbol.map(miniSym => this.getStock(miniSym));
        const stockDatas = await Promise.all(promises);
        document.querySelector('#loading-overlay').classList.add('hidden');
        return this.aggregateData(stockDatas);
    }

    static async getStock(symbol) {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=UMSPYAT6N4ETOBFD`;
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
        return this.convertData(jsonData["Time Series (Daily)"], symbol);
    }

    static convertData(jsonData, symbol) {
        const stockItems = [];
        for (let date in jsonData) {
            const data = jsonData[date];
            stockItems.push({
                date: date,
                symbol: symbol,
                open: parseFloat(data["1. open"]),
                high: parseFloat(data["2. high"]),
                low: parseFloat(data["3. low"]),
                close: parseFloat(data["4. close"]),
                volume: parseInt(data["5. volume"], 10),
            });
        }
        return stockItems;
    }

    static aggregateData(stockDatas) {
        const aggregatedData = {};

        stockDatas.flat().forEach(({ open, close, high, low, volume, date }) => {
            if (!aggregatedData[date]) {
                aggregatedData[date] = { open: 0, high: 0, low: 0, close: 0, volume: 0 };
            }
            aggregatedData[date].open += open;
            aggregatedData[date].close += close;
            aggregatedData[date].high += high;
            aggregatedData[date].low += low;
            aggregatedData[date].volume += volume;
            aggregatedData[date].date = new Date(date);
        });

        const result = Object.entries(aggregatedData).map(([date, data]) => ({
            date, ...data
        })).sort((a, b) => a.date.getTime() - b.date.getTime());
        
        console.log("Aggregated Result:")
        console.log(result)
        return result;        
    }
}

export default PortfolioHistory;
