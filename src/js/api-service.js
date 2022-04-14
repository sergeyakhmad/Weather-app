const BASE_URL = "https://api.openweathermap.org";
const API_KEY = '8e36de85ae4b6a5262797d3a5d28de44';
export const today = 'weather';
export const fiveDay = 'forecast';

export function getCity(city = 'kiev', limit = 1) {
    return fetch(BASE_URL + `/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_KEY}`).then(res => {
        if (!res.ok) return Promise.reject('404');
        return res.json();
    })
}

export function getWeatherData(lat, lon, page = today) {
    return fetch(BASE_URL + '/data/2.5/' + page + `?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then(res => {
        if (!res.ok) return Promise.reject('404');
        return res.json();
    })
}
