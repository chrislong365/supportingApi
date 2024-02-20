const axios = require('axios');

const API_KEY = process.env.ACCUWEATHER_KEY;
const LOCATION_KEY = '332098';

async function getWeather() {
  try {
    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${LOCATION_KEY}?apikey=${API_KEY}&details=false`);
    var weatherData = response.data;
    weatherData.forEach(item => delete item.MobileLink); 
    return(weatherData)
  }
  catch (error) {
    console.error('Error fetching weather:', error.message);
    return ({error: error});
  }
}

module.exports = getWeather;