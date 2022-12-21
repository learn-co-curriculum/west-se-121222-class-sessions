// DOM Selectors
const ramenMenu = document.querySelector("#ramen-menu")
const detailImage = document.querySelector(".detail-image")
const name = document.querySelector(".name")
const restaurant = document.querySelector(".restaurant")
const ratingDisplay = document.querySelector("#rating-display")
const commentDisplay = document.querySelector("#comment-display")
const newRamen = document.querySelector("#new-ramen")

// Event listeners
newRamen.addEventListener('submit', addNewRamen)

// Event handlers
function addNewRamen(e){
    e.preventDefault()
    const name = e.target.name.value
    const restaurant = e.target.restaurant.value
    const image = e.target.image.value
    const rating = e.target.rating.value
    const comment = e.target["new-comment"].value
    const newRamenObj = {
        name,
        restaurant,
        image,
        rating,
        comment
    }
    renderInMenu(newRamenObj)
    newRamen.reset()
}


// Fetches
fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then((ramensArr) => {
    ramensArr.forEach((ramenObj) => {
        renderInMenu(ramenObj)
    })
    renderRamenDetail(ramensArr[0])
})

// Renders
function renderInMenu(ramenObj){
    
    // console.log('ramenObj: ', ramenObj);
    const img = document.createElement('img');
    img.src = ramenObj.image
    // console.log('ramenMenu: ', ramenMenu);
    ramenMenu.append(img)
    img.addEventListener('click', () => renderRamenDetail(ramenObj))
    
}

function renderRamenDetail(ramenObj){
    detailImage.src = ramenObj.image
    name.textContent = ramenObj.name
    restaurant.textContent = ramenObj.restaurant
    ratingDisplay.textContent = ramenObj.rating
    commentDisplay.textContent = ramenObj.comment
}

