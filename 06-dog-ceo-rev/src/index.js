// Global
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = []

// DOM Selector
const imgContainer = document.querySelector('#dog-image-container') // grab anchor
const breedContainer = document.querySelector('#dog-breeds')
const breedSelector = document.querySelector('#breed-dropdown')

// Event Listeners
breedSelector.addEventListener('change', (e) => selectBreedsStartingWith(e.target.value))

// Event handlers
function selectBreedsStartingWith(letter){
    console.log('letter: ', letter);
    const filteredBreeds = letter === 'all' ? breeds : breeds.filter(breed => breed.startsWith(letter));
    iterateDogBreeds(filteredBreeds)
}

// Fetchers
function getDogImages(url){ // get data
    return fetch(url)
     .then(response => response.json())
}

function getDogBreeds(url){
    return fetch(url)
        .then(response => response.json())
}

// Render functions
function iterateDogImages(imageArr){
    // console.log('imageArr: ', imageArr);
    imageArr.forEach(renderDogImage)
    
}

function renderDogImage(imgUrl){
    // console.log('imgUrl: ', imgUrl);
    const newImageEl = document.createElement('img') // create new element
    newImageEl.src = imgUrl // assign data to new element
    imgContainer.appendChild(newImageEl) // inject into DOM
    
}

function iterateDogBreeds(breedArr){
    // console.log('breedArr: ', breedArr);
    breedContainer.innerHTML = '' // erases children of breedContainer USE WITH CAUTION
    breedArr.forEach(renderBreed)
}

function renderBreed(breed){
    // console.log('breed: ', breed);
    const li = document.createElement('li')
    li.textContent = breed
    li.addEventListener('click', updateColor)
    breedContainer.append(li)
}

function updateColor(e){
    e.target.style.color = 'palevioletred'
}


// Initializers
getDogImages(imgUrl).then(result => iterateDogImages(result.message))
getDogBreeds(breedUrl).then(result => {
    const breedArr = Object.keys(result.message)
    iterateDogBreeds(breedArr)
    breeds = breedArr
})

