const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=11dbf833cc3f6316214d045528716be0';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1289';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=11dbf833cc3f6316214d045528716be0&query="';

//get initial movies
getMovies(API_URL);
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results)
}