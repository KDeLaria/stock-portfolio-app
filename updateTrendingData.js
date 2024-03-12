const fs = require('fs');
const axios = require('axios');
const apiUrl = 'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo';


axios.get(apiUrl)
  .then(response => {
    const data = JSON.stringify(response.data, null, 2);
    fs.writeFile('./client/src/seeds/top-gainers-losers-seed.json', data, (err) => {
        if (err) throw err;
        console.log('Trending Data has been updated!');
      });;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });