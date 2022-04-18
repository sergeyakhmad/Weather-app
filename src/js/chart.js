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
Chart.defaults.borderColor = 'rgb(255,255,255,0.2)';

//даты прогноза
const labels = ['Date-1', 'Date-2', 'Date-3', 'Date-4', 'Date-5'];

//значения показателей (температура, влажность, скорость ветра, атм осадки)
const vaulesArr = [0, 1, 0, -1, 0];
const temperature = [2, 4, 6, 1, 8];
const humidity = [66, 70, 63, 67, 83];
const windSpeed = [2, 6, 5, 8, 12];
const atmPress = [734, 733, 733, 735, 736];

const dataChart = {
  //даты прогноза
  labels: labels,

  datasets: [
    {
      label: '— Temperature, C° ',
      data: temperature,

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
        text: 'Value of Indicator',
        color: 'rgba(255, 255, 255, 0.54)',
        position: 'left',
        align: 'center',
      },
    },

    scales: {
      y: {
        min: Math.min(...dataChart.datasets[0].data) - 1,
        max: Math.max(...dataChart.datasets[0].data) + 1,
        ticks: {
          stepSize: 1,
        },
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
      config.options.scales = {
        y: {
          min: Math.min(...dataChart.datasets[0].data) - 1,
          max: Math.max(...dataChart.datasets[0].data) + 1,
          ticks: {
            stepSize: 0.5,
          },
        },
      };
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
      config.options.scales = {
        y: {
          min: Math.min(...dataChart.datasets[0].data) - 1,
          max: Math.max(...dataChart.datasets[0].data) + 1,
          ticks: {
            stepSize: 2,
          },
        },
      };
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
      config.options.scales = {
        y: {
          min: Math.min(...dataChart.datasets[0].data) - 1,
          max: Math.max(...dataChart.datasets[0].data) + 1,
          ticks: {
            stepSize: 1,
          },
        },
      };
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
      config.options.scales = {
        y: {
          min: Math.min(...dataChart.datasets[0].data) - 1,
          max: Math.max(...dataChart.datasets[0].data) + 1,
          ticks: {
            stepSize: 1,
          },
        },
      };
      changeChartLabel(id);
      myChart.update();
      break;

    default:
      return;
  }
}
