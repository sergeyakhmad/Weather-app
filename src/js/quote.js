const quoteMarkup = (quote, author) => {
  document.querySelector('.home-day').insertAdjacentHTML(
    'beforeend',
    `<div class="quote">
            <p>${quote}</p>
            <span>${author}</span>
        <div>`,
  );
};
const quote = fetch(`https://api.goprogram.ai/inspiration`)
  .then(response => {
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
