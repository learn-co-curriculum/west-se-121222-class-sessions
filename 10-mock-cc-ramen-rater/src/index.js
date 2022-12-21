// DOM Selectors
const ramenMenu = document.querySelector("#ramen-menu")


// Fetches
fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then((ramensArr) => {
    ramensArr.forEach((ramenObj) => {
        renderInMenu(ramenObj)
    })
})

// Renders
function renderInMenu(ramenObj){
    
    console.log('ramenObj: ', ramenObj);
    const img = document.createElement('img');
    img.src = ramenObj.image
    console.log('ramenMenu: ', ramenMenu);
    ramenMenu.append(img)
}

