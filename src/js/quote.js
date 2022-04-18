const quoteMarkup = (quote, author) => {
    document.querySelector('.quote').insertAdjacentHTML('beforeend',
        `<p>${quote}</p>
            <span>${author}</span>`);
}
const quote = fetch(`https://api.goprogram.ai/inspiration`).then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})
    .then(data => {
        quoteMarkup(data.quote, data.author);
    })
    .catch(error => {
        console.log(error);
    });