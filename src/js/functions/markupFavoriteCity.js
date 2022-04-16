import refs from '../refs';

export function markupFavoriteListCity(cities) {
  const markup = cities
    .map(
      city => `
  <div class="favorite-city__item">
  <p class="favorite-city__text">${city}</p>
  <button class="favorite-city__del" type="button"></button>
  </div>`,
    )
    .join('');
  refs.favoriteCityList.innerHTML = markup;
}

export function markupCity(city) {
  return `
  <div class="favorite-city__item">
  <p class="favorite-city__text">${city}</p>
  <button class="favorite-city__del" type="button"></button>
  </div>`;
}
