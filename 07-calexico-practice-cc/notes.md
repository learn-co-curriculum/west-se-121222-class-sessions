# Core Deliverables
As a user, I can:
1. View all menu items in the Menu section on page load
  - [x] Fetch all dish data
  - [x] Select the menu div as anchor
  - [x] Iterate over dish data; send each to render fn
  - [x] Create <span> for each dish
  - [x] Add dish name as text to <span>
  - [x] Append each span to the anchor
2. View the details of the first menu item in Dish details section on page load
  - [x] Select DOM elements to be modified
  - [x] Set the element attributes with the dish data
  - [x] Get the 1st dish obj from the data array and send to render fn
3. Click a menu item and see its details displayed in the Dish details secion
  - [x] add listener to each <span> in menu
  - [x] use detail render fn as callback to the listener
  - [x] listener passes dish obj to detail render fn
  - [x] render fn sets attributes of detail elements with obj values
4. Add menu items to "my cart". Cart only needs to increment when same dish is selected, but can resent when is selected (no persistence, front or back)
  - [x] select form from DOM
  - [x] add event listener to form
  - [x] preventDefault() on form submit event
  - [x] get value of the input from form
  - [x] get value of cart from DOM
  - [x] calculate new value and update the DOM

## Data shape
```javascript
{
        "id": 1,
        "name": "Chips & Guacamole",
        "image": "./assets/calexico-guac.webp",
        "description":"House-made tortilla chips with fresh daily made guacamole",
        "price": 13.00,
        "number_in_bag": 0
}
```

# MANTRA
1. Get data
2. Create new elements/select elements to modify
3. Add data to new elements
4. Select anchor elements in DOM
5. Append new elements to anchor elements 

## Bonus Deliverables
1. Persist cart value for each item on front end
2. Persist cart value on back end with PATCH requests
3. Calculate *total cost* of cart for all items and display *somewhere*

