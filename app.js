const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=11dbf833cc3f6316214d045528716be0';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1289';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=11dbf833cc3f6316214d045528716be0&query="';
const main = document.getElementById('maidn');
const form = document.getElementById('form');
const search = document.getElementById('search');

//get initial movies
getMovies(API_URL);
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
};

function showMovies(movies) {
    main.innerHTML = '';
};

form.addEventListener('submit', function(evenet) {
    evenet.preventDefault();
    const searchTemrm = search.value;
    if (searchTemrm && searchTemrm !=='') {
        getMovies(SEARCH_API + searchTemrm);
        searh.value = ''; 
    } else {
        window.location.reload();
    }
});