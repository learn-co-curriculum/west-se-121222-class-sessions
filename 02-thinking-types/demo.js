// Person: {
//  name: string,
//  age: number,
// }

function getName(human) {
    return human.name;
}
  
function getAge(human) {
    return human.age;
}
  
function makePerson(name, age) {
    return {
      name: name,
      age: age
    };
}
  
function birthday(human) {
    human.age += 1;
    return human;
}

const mySimon = {
    name: "Simon",
    age: 9
}

const myMimi = {
    name: "Miyuki",
    age: 9
}

console.log(getName(mySimon))
console.log(getName(myMimi))
birthday(myMimi)
console.log(getAge(myMimi))


// Array.prototype.find
//find(callbackFn):element
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const firstEven = numbers.find(number => number % 2 === 0)
console.log('firstEven: ', firstEven);

// Array.prototype.filter
//filter(callbackFn):array
const allEvens = numbers.filter(number => number % 2 === 0)
console.log('allEvens: ', allEvens);

// Array.prototype.reduce
//reduce(callback, initialValue): accumulator
const total = numbers.reduce((sum, currNumber) => sum + currNumber, 0)
console.log('total: ', total);

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
