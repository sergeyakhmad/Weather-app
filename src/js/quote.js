export const quoteMarkup = data => {
  return `
  <div class="quote">
  <div class="quote">
            <p>${data.quote}</p>
            <span>${data.author}</span>
        <div>
        </div>
        `;
};
export const quote = async () => {
  return await fetch(`https://api.goprogram.ai/inspiration`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    });
};
