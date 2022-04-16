import './sass/main.scss';
import './js/event';
import './js/favorite-city';
import { fiveDays, getWeatherData, today } from './js/api-service';

getWeatherData('kiev', today).then(console.log);
getWeatherData('kiev', fiveDays).then(console.log);
