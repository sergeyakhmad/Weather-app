const quoteMarkup = (quote, author) => {
    document.querySelector('.quote').innerHTML = `
    <p>${quote}</p>
    <span>${author}</span>
    `;
}
let arr = [];
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