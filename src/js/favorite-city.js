import Glide from '@glidejs/glide';
import refs from './refs';
import debounce from 'lodash.debounce';
import { markupFavoriteListCity } from './functions/markupFavoriteCity';

export let cityName = '';
export const arrFavoriteCityName = localStorage.getItem('cityName')
  ? JSON.parse(localStorage.getItem('cityName'))
  : [];

markupFavoriteListCity(arrFavoriteCityName);

refs.input.addEventListener(
  'input',
  debounce(e => {
    if (e.target.value === '') return;
    cityName = e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase();
  }, 500),
);

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  if (refs.input.value === '') return;

  //  запрос на ip и делаю разметку;
});

refs.favoriteBtn.addEventListener('click', e => {
  if (!cityName) return;
  refs.input.value = '';
  if (arrFavoriteCityName.includes(cityName)) return;

  arrFavoriteCityName.push(cityName);
  localStorage.setItem('cityName', JSON.stringify(arrFavoriteCityName));
  markupFavoriteListCity(arrFavoriteCityName);
  glide.mount();
});

refs.favoriteCityList.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    const cityName = e.path[1].childNodes[1].textContent;
    const idxForRemove = arrFavoriteCityName.indexOf(cityName);

    arrFavoriteCityName.splice(idxForRemove, 1);
    localStorage.setItem('cityName', JSON.stringify(arrFavoriteCityName));
    markupFavoriteListCity(arrFavoriteCityName);
    glide.mount();
  }

  if (e.target.nodeName === 'P') {
    refs.input.value = e.target.textContent;
    // делаем запрос
  }
});

const glide = new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  focusAt: 0,
  perView: 4,
  rewind: false,
  bound: true,
  breakpoints: {
    768: {
      perView: 2,
    },
  },
});

glide.mount();
