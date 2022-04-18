import Glide from '@glidejs/glide';
import refs from './refs';
import debounce from 'lodash.debounce';
import { markupFavoriteListCity, markupFavoriteCity } from './functions/markupFavoriteCity';

export const objCity = {
  name: '',
};

const arrFavoriteCityName = localStorage.getItem('cityName')
  ? JSON.parse(localStorage.getItem('cityName'))
  : [];

const widthOfUserScreen = window.innerWidth;
const num = arrFavoriteCityName.length;

markupFavoriteListCity(arrFavoriteCityName);

refs.input.addEventListener(
  'input',
  debounce(e => {
    if (e.target.value === '') return;
    objCity.name = e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase();
    console.log(objCity.name);
  }, 300),
);

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  if (refs.input.value === '') return;

  //  делаю запрос и рендер разметки, название города лежит в objCity.name.
});

refs.favoriteBtn.addEventListener('click', e => {
  if (!objCity.name) return;
  refs.input.value = '';
  if (arrFavoriteCityName.includes(objCity.name)) return;

  arrFavoriteCityName.splice(0, 0, objCity.name);
  localStorage.setItem('cityName', JSON.stringify(arrFavoriteCityName));

  markupFavoriteCity(objCity.name);

  if (arrFavoriteCityName.length > 2 && widthOfUserScreen < 768)
    refs.btnNext.classList.remove('hidden');

  if (arrFavoriteCityName.length > 4 && widthOfUserScreen >= 768)
    refs.btnNext.classList.remove('hidden');

  glide.mount();
});

refs.favoriteCityList.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    const cityName = e.path[1].childNodes[1].textContent;
    const idxForRemove = arrFavoriteCityName.indexOf(cityName);

    arrFavoriteCityName.splice(idxForRemove, 1);
    localStorage.setItem('cityName', JSON.stringify(arrFavoriteCityName));

    e.target.closest('li').remove();
    glide.mount();
  }

  if (e.target.nodeName === 'P') {
    refs.input.value = e.target.textContent;
    objCity.name = e.target.textContent;

    //  делаю запрос и рендер разметки, название города лежит в objCity.name.
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

if ((widthOfUserScreen < 768 && num > 2) || (widthOfUserScreen >= 768 && num > 4)) {
  refs.btnNext.classList.remove('hidden');
}

glide.on('run.after', function () {
  const num = arrFavoriteCityName.length;
  const idx = glide.index;

  if (idx === 0) {
    refs.btnPrev.classList.add('hidden');
  } else refs.btnPrev.classList.remove('hidden');

  if (widthOfUserScreen >= 768) {
    if (idx >= num - 4) {
      refs.btnNext.classList.add('hidden');
    } else refs.btnNext.classList.remove('hidden');
  }

  if (widthOfUserScreen < 768) {
    if (idx >= num - 2) {
      refs.btnNext.classList.add('hidden');
    } else refs.btnNext.classList.remove('hidden');
  }
});

refs.btnNext.addEventListener('click', e => {
  e.stopImmediatePropagation();

  glide.go('>');
});

refs.btnPrev.addEventListener('click', e => {
  e.stopImmediatePropagation();

  glide.go('<');
});

glide.mount();
