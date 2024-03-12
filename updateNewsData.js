const fs = require('fs');
const axios = require('axios');
const apiUrl = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo';


axios.get(apiUrl)
  .then(response => {
    const data = JSON.stringify(response.data, null, 2);
    fs.writeFile('./client/src/seeds/news-seed.json', data, (err) => {
        if (err) throw err;
        console.log('News Data has been updated!');
      });;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });