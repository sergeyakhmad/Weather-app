import { getWeatherData, oneCallApi } from './api-service';
import { markupHomeWeather } from './home-weather';
import { markupHomeDay, timeId } from './home-day';
import { marcupDays, marcupMore } from './five-days';
import { quoteMarkup, quote } from './quote';
import refs from './refs/';
import { arrFavoriteCityName } from './favorite-city';
import { cityName } from './favorite-city';

const nameRequest = arrFavoriteCityName[0] || 'Kiev';

const marcupBtn = `<div class="home-buttons">
<button class="home-today-btn home-btn" disabled>TODAY</button>
<button class="home-days-btn home-btn">5 DAYS</button>
</div>`;

export async function marcupFiveDays() {
  const data = await getWeatherData(cityName || nameRequest, 'forecast');
  const data2 = await oneCallApi(data.city.coord.lat, data.city.coord.lon);

  clearInterval(timeId);
  marcupDays(data, data2);
}

export async function marcupSectionMore(e) {
  const data = await getWeatherData(cityName || nameRequest, 'forecast');

  marcupMore(e, data);
}

export async function marcupToday() {
  const weatherData = await getWeatherData(cityName || nameRequest, 'weather');
  const quoteData = await quote();

  const arr = [
    markupHomeWeather(weatherData),
    marcupBtn,
    markupHomeDay(weatherData),
    quoteMarkup(quoteData),
  ];
  document.querySelector('.five-days-container').innerHTML = '';
  refs.homeContainer.innerHTML = arr.join('');
  document.querySelector('.home-days-btn').addEventListener('click', marcupFiveDays);
}

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  if (refs.input.value === '') return;

  if (document.querySelector('.home-days-btn')?.hasAttribute('disabled')) {
    marcupFiveDays();
  } else {
    marcupToday();
  }
  refs.input.value = '';
});

marcupToday();
