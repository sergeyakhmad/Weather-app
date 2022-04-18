import refs from './refs'

async function success(lat, lon) {
    return await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=b2768f8fbe934cd7b99d37f5117e7ccd&language=en`)
        .then(res => res.json())
        .then(Object.entries)
        .then(res => res[3])
        .then(res => res[1])
        .then(res => refs.input.value = res[0].components.city ? res[0].components.city : res[0].components.village)
        .then(console.log);
}

navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    success(lat, lon);
});

// document.querySelector('form').addEventListener('click', e => {
//     e.preventDefault();
//     if (e.target.nodeName !== 'BUTTON') return;
//     if (e.target.id === 'search') {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;
//             success(lat, lon);
//         })
//     };
// });
