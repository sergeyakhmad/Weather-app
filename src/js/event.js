import refs from './refs';

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
