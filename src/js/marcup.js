import { getWeatherData, oneCallApi } from './api-service';
import { markupHomeWeather } from './home-weather';
import { markupHomeDay, timeId } from './home-day';
import { marcupDays, marcupMore } from './five-days';
import { quoteMarkup, quote } from './quote';
import refs from './refs/';
import { arrFavoriteCityName } from './favorite-city';
import { cityName } from './favorite-city';
import { glide } from './glide-settings';

const nameRequest = arrFavoriteCityName[0] || 'Kiev';
let cityValue = cityName;

const marcupBtn = `<div class="home-buttons">
<button class="home-today-btn home-btn" disabled>TODAY</button>
<button class="home-days-btn home-btn">5 DAYS</button>
</div>`;

export async function marcupFiveDays() {
  const data = await getWeatherData(cityValue || nameRequest, 'forecast');
  const data2 = await oneCallApi(data.city.coord.lat, data.city.coord.lon);

  clearInterval(timeId);
  marcupDays(data, data2);
}

export async function marcupSectionMore(e) {
  const data = await getWeatherData(cityValue || nameRequest, 'forecast');

  marcupMore(e, data);
}

export async function marcupToday() {
  const weatherData = await getWeatherData(cityValue || nameRequest, 'weather');
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

  cityValue = refs.input.value;
  if (document.querySelector('.home-days-btn')?.hasAttribute('disabled')) {
    marcupFiveDays();
  } else {
    marcupToday();
  }
  refs.input.value = '';
});

refs.favoriteCityList.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    const name = e.path[1].childNodes[1].textContent;
    const idxForRemove = arrFavoriteCityName.indexOf(name);

    arrFavoriteCityName.splice(idxForRemove, 1);
    localStorage.setItem('cityName', JSON.stringify(arrFavoriteCityName));

    e.target.closest('li').remove();
    glide.mount();
  }

  if (e.target.nodeName === 'P') {
    cityValue = e.target.textContent;

    if (document.querySelector('.home-days-btn')?.hasAttribute('disabled')) {
      marcupFiveDays();
    } else {
      marcupToday();
    }
  }
});

marcupToday();
