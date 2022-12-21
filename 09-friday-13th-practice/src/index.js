// Globals
const URL = "http://localhost:3000/movies"

// DOM Selectors
const nav = document.querySelector('#movie-list')

// Event listeners

// Event handlers

// Fetches
function getAllMovies(url){
   return fetch(url)
    .then(response => response.json())
}

// Render functions

function renderInNav(movieObj){
    console.log('movieObj: ', movieObj);
    const navImage = document.createElement('img');
    navImage.src = movieObj.image
    console.log('navImage: ', navImage);
    nav.append(navImage);
}


// Initializers
getAllMovies(URL).then(movieArr => {
    movieArr.forEach(renderInNav)
})