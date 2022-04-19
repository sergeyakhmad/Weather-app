import { setDataChart } from '../chart';

export function markupChart(data) {
  const dataForChart = {
    dates: [],
    temperature: [],
    humidity: [],
    windSpeed: [],
    atmPress: [],
  };

  const dates = data.daily.slice(0, 5).map(day => {
    dataForChart.dates.push(timeConverter(day.dt));
    dataForChart.temperature.push(day.temp.day);
    dataForChart.humidity.push(day.humidity);
    dataForChart.windSpeed.push(day.wind_speed);
    dataForChart.atmPress.push(day.pressure);
  });

  ['myChart-temperature', 'myChart-humidity', 'myChart-wind', 'myChart-atmospherePressure'].forEach(
    id => setDataChart(id, dataForChart),
  );
}

function timeConverter(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[a.getMonth()];
  const date = a.getDate();
  const time = date + ' ' + month;
  return time;
}
