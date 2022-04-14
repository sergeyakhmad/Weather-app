// const jsondb = require('../config.json');
// const API_KEY = jsondb.API_KEY;
const API_KEY = '428ed231089210f0f91b7ff93c680cd1';
export const today = 'weather';
export const fiveDays = 'forecast';

export function getWeatherData(city, page = today) {
  return fetch(`https://api.openweathermap.org/data/2.5/${page}?q=${city}&appid=${API_KEY}`).then(
    res => {
      if (!res.ok) return Promise.reject('404');
      return res.json();
    },
  );
}
