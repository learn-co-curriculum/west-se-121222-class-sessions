# Core Deliverables
As a user, I can:
1. View all movies in the nav element on page load
  - [x] Fetch all movie data
  - [x] Iterate array of movies
  - [x] Create <img> for each movie
  - [x] Add src to each <img> from movieObj
  - [x] select nav element as anchor
  - [x] Append each <img> to nav

2. View the 1st moview details on page load
  - [] (re-fetch data if necessary)
  - [] select the proper DOM elements
  - [] Set attributes of DOM elements with selected movie obj properties
  - [] get 1st movie obj from movieArr and send to render fn

3. Click a movie in the nav and see its details in the detail section
  - [] add event listener to each <img> in nav (click event)
  - [] use detail render fn from above 
  - [] listener passes movie obj to fn
  - [] render fn sets attr of detail elements with obj values

4. Click a "watched" button which toggles and persists only in DOM
  - [] add event listener to each button
  - [] cb needs a conditional that sets the button text
  - [] cb will flip the value of watched for the detail movie obj

5. Enter a number of drops for each movie and have it persist in DOM
  - [] select the form
  - [] add listener to form
  - [] preventDefault()
  - [] get input value from form
  - [] increment the `blood_amount` of detail movie with input value
  - [] update the DOM

MANTRA
1. Get data
2. Create new elements
3. Add data to new elements
4. Select anchor elements in DOM
5. Append new elements to anchor elements 

## Data shape
```javascript
{
    "id": 1,
    "title": "Friday the 13th",
    "release_year": 1980,
    "description": "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
    "image": "./assets/f13-1.jpeg",
    "watched": false,
    "blood_amount": 0
}
```