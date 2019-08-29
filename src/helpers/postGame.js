const GAMES = "http://localhost:3000/games";

const SCREENSHOTS = "http://localhost:3000/screenshots";

export const postGame = config => fetch(GAMES, config);
export const postScreenShot = config => fetch(SCREENSHOTS, config);
