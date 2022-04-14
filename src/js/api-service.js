const BASE_URL = "https://api.openweathermap.org";
const jsondb = require('../config.json');
const API_KEY = jsondb.API_KEY;
export const today = 'weather';
export const fiveDays = 'forecast';

export function getWeatherData(city, page = today) {
    return fetch(BASE_URL + '/data/2.5/' + page + `?q=${city}&appid=${API_KEY}`).then(res => {
        if (!res.ok) return Promise.reject('404');
        return res.json();
    })
}
