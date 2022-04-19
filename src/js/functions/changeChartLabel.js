//изменяем в разметке выбраный ярлык

export function changeChartLabel(id) {
  document.querySelectorAll('.chart-labels__item-text').forEach(element => {
    if (element.parentNode.id === id) element.classList.remove('selected');
    else element.classList.add('selected');
  });
}

export function ChangeChartOption(id) {
  document.querySelectorAll('CANVAS').forEach(element => {
    if (id === element.id.slice(element.id.indexOf('-') + 1, element.id.length)) {
      document.querySelector(`#${element.id}`).classList.remove('visually-hidden');
    } else {
      document.querySelector(`#${element.id}`).classList.add('visually-hidden');
    }
  });
  changeChartLabel(id);
}
