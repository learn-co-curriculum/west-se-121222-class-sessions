## Core deliverables
As a user, I can:
1. See all ramen images in menu
 - [x] GET fetch all ramens
 - [x] iterate the array of ramenObjs
 - [x] create <img> tags
 - [x] assign src to each <img> from each ramen
 - [x] select menu element from DOM
 - [x] append new <img> to menu
2. Click on a menu img to see the details of that ramen shown in the details section
  - [] add event listener
  - [] handle click event
  - [] select elements to update from the DOM
  - [] update element attributes with selected ramen data
3. Submit a form to create a new ramen in the menu (no persistence--back)
  - [] select the form
  - [] attach a listener
  - [] handle the submit event
  - [] preventDefault()
  - [] get value from each input (save -> var)
  - [] use data to create a new ramen
  - [] add ramen to the menu (reuse a fn)

## Advanced deliverables
1. See details of the 1st ramen on page load
2. Change the rating and comment with an edit form (no persistence--back)
3. Delete a ramen from menu (no persistence--back)

### Extra advanced
1. add persistence to the backend to the above where possible

## Data shape
```javascript
{
    "id": 1,
    "name": "Shoyu Ramen",
    "restaurant": "Nonono",
    "image": "./assets/ramen/shoyu.jpg",
    "rating": 7,
    "comment": "Delish. Can't go wrong with a classic!"
}
```

## Endpoints
base: http://localhost:3000
GET /ramens
GET /ramens/:id

### Adv
POST /ramens
PATCH /ramens/:id
DELETE /ramens/:id