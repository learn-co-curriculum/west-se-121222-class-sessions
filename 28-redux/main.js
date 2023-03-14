import './style.css'
import { legacy_createStore as createStore } from 'redux'

const initialState = {
  budget: 100,
  pets: [
    {id: 1, name: "Daisy", species: "dog"},
    {id: 2, name: "Felix", species: "cat"}
  ]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "addTenDollars": 
      return {
        ...state,
        budget: state.budget += 10
      }
  }

  return state
}

const store = createStore(reducer)
console.log("🚀 ~ file: main.js:9 ~ store:", store)

store.subscribe(() => {
  const state = store.getState()
  const budgetH3 = document.querySelector("#budget")
  budgetH3.textContent = `Budget: ${state.budget}`
})
store.dispatch({type: "addTenDollars"}) // => reducer(store.getState(), {action...})
const nextState = store.getState()
console.log("🚀 ~ file: main.js:34 ~ nextState:", nextState)
console.log("🚀 ~ file: main.js:29 ~ newBudget:", nextState.budget)

const petsUl = document.querySelector('#pets')
nextState.pets.forEach(p => {
  const li = document.createElement('li')
  li.textContent = `Name: ${p.name} | Species: ${p.species}`
  petsUl.appendChild(li)
})

const addBtn = document.querySelector('#add10')
addBtn.addEventListener('click', () => store.dispatch({type: 'addTenDollars'}))
