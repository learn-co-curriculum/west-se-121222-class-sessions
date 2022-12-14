// const playMusic = function (music) {
//     return "Playing some " + music;
//   };
// console.log(playMusic("Jazz")); // "Playing some Jazz"

//1
// const playMusic = (music) => {
//     return "Playing some " + music;
//   };
// console.log('playMusic("Jazz"): ', playMusic("Jazz"));

// 2
// const playMusic = (music) => {
//     "Playing some " + music;
// };
// playMusic("Jazz"); // undefined
// console.log('playMusic("Jazz"): ', playMusic("Jazz"));

//3
// const playMusic = (music) => "Playing some " + music; // implicit return! with one-line arrow functions
// playMusic("Jazz"); // "Playing some Jazz"
// console.log('playMusic("Jazz"): ', playMusic("Jazz"));

//4
const playMusic = music => "Playing some " + music;
playMusic("Jazz"); // "Playing some Jazz"
console.log('playMusic("Jazz"): ', playMusic("Jazz"));

//5
// const readBooks = (book1, book2) => {
//     return `I read '${book1}' and '${book2}'`;
// };
// readBooks("The Old Man and the Sea", "1984"); // "I read 'The Old Man and the Sea' and '1984'"
// console.log('readBooks("The Old Man and the Sea", "1984"): ', readBooks("The Old Man and the Sea", "1984"));

//6
// const readBooks = (book1, book2) => `I read '${book1}' and '${book2}'`;
// readBooks("The Old Man and the Sea", "1984"); // "I read 'The Old Man and the Sea' and '1984'"
// console.log('readBooks("The Old Man and the Sea", "1984"): ', readBooks("The Old Man and the Sea", "1984"));

//7
// const readBooks = book1, book2 =>  `I read '${book1}' and '${book2}'` // Syntax Error
// console.log('readBooks("The Old Man and the Sea", "1984"): ', readBooks("The Old Man and the Sea", "1984"));
