const PLATFORMS = "http://localhost:3000/platforms";

export const getPlatforms = callback => {
  fetch(PLATFORMS)
    .then(resp => resp.json())
    .then(json => callback(json));
};
