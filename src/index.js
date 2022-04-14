import './sass/main.scss';
import './js/event';
import { fiveDay, getCity, getWeatherData, today } from './js/api-service';


getCity().then(console.log); // получение данных по городу
getWeatherData(50.4500336, 30.5241361, today).then(console.log); // получение данных за сегодня
getWeatherData(50.4500336, 30.5241361, fiveDay).then(console.log); // получение данных за пять getWeatherData