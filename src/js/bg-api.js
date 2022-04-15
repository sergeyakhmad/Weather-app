function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function img(city) {
    return fetch(`https://api.unsplash.com/search/photos/?client_id=LZvDZOjmJ3YNQFh2j9aXsuN6LDWTFwfPTOC_ddGKNmc&query=${city}&page=1&per_page=10&orientation=landscape`).then(
        res => {
            if (!res.ok) return Promise.reject('404');
            return res.json();
        },
    );
}
export function bgImg(city) {
    if (localStorage.getItem(city)) document.querySelector('body').style.backgroundImage = `url(${localStorage.getItem(city).split(',')[getRandomNum(1, 10)]})`;
    else 
    img(city)
        .then(res => Object.entries(res))
        .then(res => res[2])
        .then(res => res[1])
        .then(res => res.map(elem => elem.urls.regular))
        // .then(console.log)
        .then(data => {
            document.querySelector('body').style.backgroundImage = `url(${data[getRandomNum(1, 10)]})`;
            localStorage.setItem(city, data);
        });
}

bgImg('kyiv')