export async function success(lat, lon) {
  return await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=b2768f8fbe934cd7b99d37f5117e7ccd&language=en`,
  )
    .then(res => res.json())
    .then(Object.entries)
    .then(res => res[3])
    .then(res => res[1])
    .then(res => {
      return res;
    });
}
