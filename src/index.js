import './sass/main.scss';
import './js/event';
import './js/favorite-city';
import { fiveDays, getWeatherData, today } from './js/api-service';
import './js/quote';
import './js/bg-api';
import './js/home-weather';
import './js/five-days';
import './js/chart';

getWeatherData('kiev', today).then(console.log);
getWeatherData('kiev', fiveDays).then(console.log);
