import refs from './refs'

async function success(lat, lon) {
    return await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=b2768f8fbe934cd7b99d37f5117e7ccd&language=en`)
        .then(res => res.json())
        .then(Object.entries)
        .then(res => res[3])
        .then(res => res[1])
        .then(res => refs.input.value = res[0].formatted.split(',')[3]);
}

document.querySelector('#search').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        success(lat, lon);
    });
});