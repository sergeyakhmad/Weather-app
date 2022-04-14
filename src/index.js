import './sass/main.scss';
import './js/event';
import { fiveDays, getWeatherData, today } from './js/api-service';
import './js/quote'

getWeatherData('kiev', today).then(console.log);
getWeatherData('kiev', fiveDays).then(console.log);