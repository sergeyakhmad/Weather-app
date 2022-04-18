import { oneCallApi } from './api-service';
import Chart from 'chart.js/auto';
import { changeChartLabel } from './functions/changeChartLabel';

//Data from API
// KIEV
// console.log(oneCallApi(30.5167, 50.4333));

//Global options
Chart.defaults.font.family = 'Lato';
Chart.defaults.font.size = 14;
Chart.defaults.plugins.legend.position = 'top';

//даты прогноза
const labels = ['Date-1', 'Date-2', 'Date-3', 'Date-4', 'Date-5'];

//значения показателей (температура, влажность, скорость ветра, атм осадки)
const vaulesArr = [0, 1, 0, -1, 0];
const temperature = [-20, -3, 0, 2, -1];
const humidity = [-2, -4, 1, 1, 3];
const windSpeed = [1, 2, 3, 4, 5];
const atmPress = [5, 4, 3, 2, 1];

const dataChart = {
  //даты прогноза
  labels: labels,

  datasets: [
    {
      label: '— Temperature, C° ',
      data: vaulesArr,

      backgroundColor: '#FF6B09',
      borderColor: '#FF6B09',
      cubicInterpolationMode: 'monotone',
    },
  ],
};

const config = {
  type: 'line',
  data: dataChart,

  options: {
    legend: {
      display: true,
      align: 'start',
      labels: {
        color: '#ffffff',
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      subtitle: {
        display: true,
        text: 'Value of Indicators',
        color: 'rgba(255, 255, 255, 0.54)',
        position: 'left',
        align: 'center',
      },
    },

    //маштабирование до размера холста
    responsive: true,
    maintainAspectRatio: false,
  },
};

const myChart = new Chart(document.getElementById('myChart'), config);

export function ChangeChartOption(id) {
  switch (id) {
    case 'temperature':
      dataChart.datasets = [
        {
          label: '— Temperature, C° ',
          data: temperature,

          backgroundColor: '#FF6B09',
          borderColor: '#FF6B09',
          cubicInterpolationMode: 'monotone',
        },
      ];
      changeChartLabel(id);
      myChart.update();
      break;

    case 'humidity':
      dataChart.datasets = [
        {
          label: '— Humidity, %',
          data: humidity,

          backgroundColor: '#0906EB',
          borderColor: '#0906EB',
          cubicInterpolationMode: 'monotone',
        },
      ];
      changeChartLabel(id);
      myChart.update();
      break;

    case 'wind':
      dataChart.datasets = [
        {
          id: 'wind',
          label: '— Wind Speed, m/s',
          data: windSpeed,

          backgroundColor: '#EA9A05',
          borderColor: '#EA9A05',
          cubicInterpolationMode: 'monotone',
        },
      ];
      changeChartLabel(id);
      myChart.update();
      break;

    case 'atmospherePressure':
      dataChart.datasets = [
        {
          label: '— Atmosphere Pressure, m/m',
          data: atmPress,

          backgroundColor: '#067806',
          borderColor: '#067806',
          cubicInterpolationMode: 'monotone',
        },
      ];
      changeChartLabel(id);
      myChart.update();
      break;

    default:
      return;
  }
}
