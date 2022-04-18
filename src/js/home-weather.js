import { fiveDays, getWeatherData, today } from './api-service';

getWeatherData('chernihiv', today).then(data => {
  markupHomeWeather(data);
});

export function markupHomeWeather(data) {
  // console.log(data);
  const temperature = Math.round(data.main.temp);
  const temperatureMin = Math.round(data.main.temp_min);
  const temperatureMax = Math.round(data.main.temp_max);
  const iconCode = data.weather[0].icon;
  const iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';
  document.querySelector('.home-weather').innerHTML = `
      <img src="${iconUrl}" class="icon-home-clouds">
      <p class="home-city">${data.name}, ${data.sys.country}</p>
      <div class="home-wrap-degrees">
        <p class="home-degree">${temperature}</p>
        <div class="home-wrap-temperature">
          <p class="home-min-degree"><span>min</span> ${temperatureMin}&#176;</p>
          <p class="home-max-degree"><span>max</span> ${temperatureMax}&#176;</p>
        </div>
      </div>`;
}
