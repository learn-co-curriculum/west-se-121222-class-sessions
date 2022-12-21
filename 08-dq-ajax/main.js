//AJAX

// 1
console.log("Hello")

fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => {
    console.log("Hi") 
  })

console.log("Sup?")

//2a
// function fetchData(){
//   let data = fetch('https://randomuser.me/api/')
//     .then( res => res.json() )
//     .then( res => res )
//   console.log(data)
// }

// fetchData()

//2b

// function fetchData(){
//   let data = fetch('https://randomuser.me/api/')
//     .then( res => res.json() )
//     .then( json => console.log(json) )
// }

// fetchData()

//2c

function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( console.log )
}

fetchData()