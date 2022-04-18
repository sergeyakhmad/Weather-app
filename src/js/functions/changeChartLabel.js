//изменяем в разметке выбраный ярлык

export function changeChartLabel(id) {
  document.querySelectorAll('.chart-labels__item-text').forEach(element => {
    if (element.parentNode.id === id) element.classList.remove('selected');
    else element.classList.add('selected');
  });
}
