const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePoster = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favoriteMovieYear')

let titleInStorage = localStorage.getItem('title');
let imageURLInStorage = localStorage.getItem('imageURL');
let yearinStorage = localStorage.getItem('year')

if (titleInStorage && imageURLInStorage && yearinStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(23, 23, 96, 0.61), rgba(0, 0, 0, 0.533)), url('${imageURLInStorage}')`;
    movieYearToDisplay.textContent = yearinStorage;
}

btn.addEventListener('click', ()=> {
    let movieTitleInput = movieTitle.value;
    let moviePosterInput = moviePoster.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageURL', moviePosterInput);
    localStorage.setItem('year', movieYearInput);

    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(23, 23, 96, 0.61), rgba(0, 0, 0, 0.533)), url('${moviePosterInput}')`;
    movieYearToDisplay.textContent = movieYearInput;

    movieTitle.value = '';
    moviePoster.value = '';
    movieYear.value = '';
});