import refs from './refs';
import { ChangeChartOption } from './functions/changeChartLabel';

// при нажатии на кнопку Show Chart отображаем график
refs.btnShowChartNode.addEventListener('click', () => {
  refs.btnShowChartNode.classList.toggle('hidden');
  refs.chartWrapNode.classList.toggle('hidden');
});

// при нажатии на кнопку Hide Chart прячем график
refs.btnHideChartNode.addEventListener('click', () => {
  refs.btnShowChartNode.classList.toggle('hidden');
  refs.chartWrapNode.classList.toggle('hidden');
});

// смена данных графика по нажатию на ярлык графика
document
  .querySelector('.chart-labels__list')
  .addEventListener('click', event => ChangeChartOption(event.target.parentNode.id));
