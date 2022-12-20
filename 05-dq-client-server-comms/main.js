// 1
// const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
// const data = fetch(url)

// console.log(data)

// 2
// const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
// fetch(url).then(console.log)

// 3
const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
// fetch(url) 
//   .then(function(response){
//     return response.json() // .json() also returns a Promise
//   }).then(console.log) // so need a 2nd .then


// 4 
function getJSON(url){
  return fetch(url)
   .then(response => response.json())
}

getJSON(url).then(console.log)


const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const arr2 = ['h', 'i', 'j', 'k', 'l']

console.log(makeSentence(arr1))
console.log(makeSentence(arr2))

function makeSentence(anyArray){
  //...
  return anyArray.map(letter => { // map has to finish before this return can return a value
    return letter.toUpperCase() // return from w/in map's callback doesn't halt function
  })
  anyArray.sort() // won't execute
}
