import refs from './refs'

document.querySelector('#search').addEventListener('click', () => navigator.geolocation.getCurrentPosition(success, defaultData))

function defaultData() {
    defaultReqWeather('Kyiv');
}

async function success(position) {
    const coordinates = position.coords;

    return await fetch(`https://api.opencagedata.com/geocode/v1/json?q=q=${coordinates.latitude}+${coordinates.longitude}&key=b2768f8fbe934cd7b99d37f5117e7ccd&language=en`)
        .then(res => res.json())
        .then(Object.entries)
        .then(res => res[3])
        .then(res => res[1])
        .then(res => refs.input.value = res[0].formatted.split(',')[1]);
}