const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=11dbf833cc3f6316214d045528716be0';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=11dbf833cc3f6316214d045528716be0&query="';
const main = document.getElementById('main');
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
    movies.forEach(function(movie) {
        const { title, poster_path, vote_average, overview } = movie;
        
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = '';
        
        movieEl.innerHTML = `
        <div class="movie">
            <img src="${IMG_PATH + poster_path}" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl);
    });
};

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', function(evenet) {
    evenet.preventDefault();
    const searchTemrm = search.value;
    if (searchTemrm && searchTemrm !=='') {
        getMovies(SEARCH_API + searchTemrm);
        search.value = ''; 
    } else {
        window.location.reload();
    }
});