import refs from './refs';
import { onChartOption } from './chart';

// при нажатии на кнопку Show Chart отображаем график
refs.btnShowChartNode.addEventListener('click', () => {
  refs.ChartNode.classList.toggle('hidden');
  refs.btnShowChartNode.classList.toggle('visually-hidden');
});

// при нажатии на кнопку Hide Chart прячем график
refs.btnHideChartNode.addEventListener('click', () => {
  refs.ChartNode.classList.toggle('hidden');
  refs.btnShowChartNode.classList.toggle('visually-hidden');
});

// смена данных графика по нажатию на ярлык графика
document
  .querySelector('.chart-labels__list')
  .addEventListener('click', event => onChartOption(event.target.parentNode.id));
