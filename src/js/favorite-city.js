import refs from './refs';
import debounce from 'lodash.debounce';
import { markupFavoriteListCity, markupCity } from './functions/markupFavoriteCity';
import Siema from 'siema';

let cityName = '';
const arrFavoriteCityName = localStorage.getItem('cityName')
  ? JSON.parse(localStorage.getItem('cityName'))
  : [];

const widthOfUserScreen = window.innerWidth;

markupFavoriteListCity(arrFavoriteCityName);

refs.input.addEventListener(
  'input',
  debounce(e => {
    if (e.target.value === '') return;
    cityName = e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase();
  }, 500),
);

refs.favoriteBtn.addEventListener('click', e => {
  if (!cityName) return;
  refs.input.value = '';
  if (arrFavoriteCityName.includes(cityName)) return;

  arrFavoriteCityName.push(cityName);
  localStorage.setItem('cityName', JSON.stringify(arrFavoriteCityName));

  const newCity = document.createElement('div');
  newCity.innerHTML = markupCity(cityName);
  mySiema.append(newCity);

  if (widthOfUserScreen < 768 && arrFavoriteCityName.length > 2) {
    refs.btnNext.hidden = false;
  }

  if (widthOfUserScreen >= 768 && arrFavoriteCityName.length > 4) {
    refs.btnNext.hidden = false;
  }
});

refs.favoriteCityList.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    const cityName = e.path[1].childNodes[1].textContent;
    const idxForRemove = arrFavoriteCityName.indexOf(cityName);

    mySiema.remove(idxForRemove);

    arrFavoriteCityName.splice(idxForRemove, 1);
    localStorage.setItem('cityName', JSON.stringify(arrFavoriteCityName));
  }

  if (e.target.nodeName === 'P') {
    refs.input.value = e.target.textContent;
    // делаем запрос
  }

  if (widthOfUserScreen < 768 && arrFavoriteCityName.length <= 2) {
    refs.btnNext.hidden = true;
    refs.btnPrev.hidden = true;
  }

  if (widthOfUserScreen > 768 && arrFavoriteCityName.length <= 4) {
    refs.btnNext.hidden = true;
    refs.btnPrev.hidden = true;
  }
});

const mySiema = new Siema({
  selector: '.favorite-city__list',
  perPage: {
    320: 2,
    768: 4,
  },
  duration: 200,
  draggable: false,
  multipleDrag: false,
  loop: false,
  onChange: () => {
    console.log(mySiema.currentSlide);
  },
});

refs.btnNext.addEventListener('click', () => {
  mySiema.next();
  if (mySiema.currentSlide > 0) {
    refs.btnPrev.hidden = false;
  }

  if (mySiema.currentSlide === 0) {
    refs.btnPrev.hidden = true;
  }

  if (widthOfUserScreen < 768 && mySiema.currentSlide === arrFavoriteCityName.length - 2) {
    refs.btnNext.hidden = true;
  }

  if (widthOfUserScreen >= 768 && mySiema.currentSlide === arrFavoriteCityName.length - 4) {
    refs.btnNext.hidden = true;
  }
});

refs.btnPrev.addEventListener('click', () => {
  mySiema.prev();
  refs.btnNext.hidden = false;
  if (mySiema.currentSlide === 0) {
    refs.btnPrev.hidden = true;
  }
});

refs.btnPrev.hidden = true;

if (widthOfUserScreen < 768 && arrFavoriteCityName.length <= 2) {
  refs.btnNext.hidden = true;
}

if (widthOfUserScreen > 768 && arrFavoriteCityName.length <= 4) {
  refs.btnNext.hidden = true;
}
