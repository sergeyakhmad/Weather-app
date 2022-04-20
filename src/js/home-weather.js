export function markupHomeWeather(data, data2) {
  const temperature = Math.round(data.main.temp);
  const temperatureMin = Math.round(data2.daily[0].temp.min);
  const temperatureMax = Math.round(data2.daily[0].temp.max);
  const iconCode = data.weather[0].icon;
  const iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';
  return `
  <div class="home-weather home-info-field">
      <img src="${iconUrl}" class="icon-home-clouds">
      <p class="home-city">${data.name}, ${data.sys.country}</p>
      <div class="home-wrap-degrees">
        <p class="home-degree">${temperature}</p>
        <div class="home-wrap-temperature">
          <p class="home-min-degree"><span>min</span> ${temperatureMin}&#176;</p>
          <p class="home-max-degree"><span>max</span> ${temperatureMax}&#176;</p>
        </div>
        </div>
      </div>`;
}
