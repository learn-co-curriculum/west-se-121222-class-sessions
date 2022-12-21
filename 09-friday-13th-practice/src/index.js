// Globals
const URL = "http://localhost:3000/movies"
let selectedMovie;

// DOM Selectors
const nav = document.querySelector('#movie-list')
const detailImage = document.querySelector('#detail-image')
const title = document.querySelector('#title')
const yearReleased = document.querySelector('#year-released')
const description = document.querySelector('#description')
const watched = document.querySelector('#watched')
const amount = document.querySelector('#amount')
const form = document.querySelector('#blood-form')
const bloodInput = document.querySelector('#blood-amount')

// Event listeners
watched.addEventListener('click', toggleWatched)
form.addEventListener('submit', addBlood)

// Event handlers
function addBlood(e){
    e.preventDefault()
    // console.dir(e.target)
    console.log('bloodInput: ', bloodInput.value, typeof bloodInput.value);
    const newBlood = parseInt(bloodInput.value)
    selectedMovie.blood_amount += newBlood
    console.log('selectedMovie.blood_amount: ', selectedMovie.blood_amount);
    renderDetail(selectedMovie)
}

function toggleWatched() {
    selectedMovie.watched = !selectedMovie.watched
    // selectedMovie.watched(false) = (opposite)selectedMovie.watched(false)
    // console.log(selectedMovie)
    if (selectedMovie.watched) {
        watched.textContent = "Watched"
    } else {
        watched.textContent = "Unwatched"
    }
}

// Fetches
function getAllMovies(url){
    return fetch(url)
    .then(response => response.json())
}

// Render functions

function renderInNav(movieObj){
    // console.log('movieObj: ', movieObj);
    const navImage = document.createElement('img');
    navImage.src = movieObj.image
    navImage.addEventListener('click', () => renderDetail(movieObj))
    // console.log('navImage: ', navImage);
    nav.append(navImage);
}

function renderDetail(movieObj){
    selectedMovie = movieObj
    detailImage.src = movieObj.image
    title.textContent = movieObj.title
    yearReleased.textContent = movieObj.release_year
    description.textContent = movieObj.description
    let watchVal = movieObj.watched ? "Watched" : "Unwatched"
    watched.textContent = watchVal
    amount.textContent = movieObj.blood_amount
}


// Initializers
getAllMovies(URL).then(movieArr => {
    movieArr.forEach(renderInNav)
    renderDetail(movieArr[0])
})