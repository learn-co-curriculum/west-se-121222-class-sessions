// Global
const URL = "http://localhost:3000/menu"
let currentDish;

// DOM Selectors
const menuList = document.querySelector('#menu-items')
const dishImage = document.querySelector('#dish-image')
const dishName = document.querySelector('#dish-name')
const dishDescription = document.querySelector('#dish-description')
const dishPrice = document.querySelector('#dish-price')
const numberInCart = document.querySelector('#number-in-cart')
const form = document.querySelector('#cart-form')
const orderTotal = document.querySelector('#order-total')

// Event listeners
form.addEventListener('submit', addToCart)

// Event handlers
function addToCart(e) {
    e.preventDefault()
    // console.log('e: ', e.target["cart-amount"].value, typeof e.target["cart-amount"].value);
    let numToAdd = Number(e.target["cart-amount"].value)
    // console.log('numToAdd: ', numToAdd, typeof numToAdd);
    // console.log(numberInCart.textContent)
    // let currCart = Number(numberInCart.textContent)
    currentDish.number_in_bag += numToAdd
    updateDish(URL, currentDish)
      .then(updatedDish => {
          renderDish(updatedDish)
          return getAllDishes(URL)
      })
      .then(displayTotal)
      .catch(err => alert(err))
    form.reset()
    // numberInCart.textContent = currCart + numToAdd
}

// Fetch functions
function getAllDishes(url) {
    return fetch(url)
      .then(res => res.json())
}

function updateDish(url, dish){
    const config = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dish)
    }
    return fetch(url + `/${dish.id}`, config)
      .then(res => {
        if (res.ok){
            return res.json()
        }
        throw "Failed to update your cart!"
      })
}

// Render functions
function iterateDishes(dishArr){
    // console.log('dishArr: ', dishArr);
    dishArr.forEach(addMenuItem)
    displayTotal(dishArr)
}

function addMenuItem(dishObj){
    // console.log('dishObj: ', dishObj);
    let menuItem = document.createElement('span');
    menuItem.textContent = dishObj.name
    menuItem.addEventListener('click', () => renderDish(dishObj))

    menuList.append(menuItem)
}

function renderDish(dishObj){
    currentDish = dishObj
    dishImage.src = dishObj.image
    dishName.textContent = dishObj.name
    dishDescription.textContent = dishObj.description
    dishPrice.textContent = dishObj.price
    numberInCart.textContent = dishObj.number_in_bag
}

function displayTotal(menuData){
    console.log('menuData: ', menuData);
    const currTotal = menuData.reduce((sum, item) => sum + (item.price * item.number_in_bag), 0)
    orderTotal.textContent = `$${currTotal}`
}


// Intializers
// getAllDishes(URL).then(iterateDishes)
getAllDishes(URL).then((dishArray) => {
    iterateDishes(dishArray)
    renderDish(dishArray[0])
})