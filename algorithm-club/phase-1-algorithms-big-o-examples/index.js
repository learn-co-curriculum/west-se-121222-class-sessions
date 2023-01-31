// What is the Big-O of the following algos?

const laundry = ["belt", "blouse", "pants", "shirt", "shorts", "sock", "underwear"];

// 0(1) contant
function printFirstItem(items){
    console.log(items[0])
}

// O(n) linear
function printAllItems(items){
    items.forEach(item => console.log(item))
}
// printAllItems(laundry)

// O(n^2) quadratic
function printAllPossibleOrderedPairs(items){
    items.forEach(firstItem => {
        items.forEach(secondItem => console.log(firstItem, secondItem))
    })
}
// printAllPossibleOrderedPairs(laundry)

// Is N the actual input value, or *size* of the input?

// O(n) linear
function sayHiNTimes(n){
    for (let i = 0; i < n; i++){
        console.log("HI")
    }
}
sayHiNTimes(25)

// Drop constants

// O(2n) -> O(n)
function printAllItemsTwice(items) {
    items.forEach((item) => {
      console.log(item);
    });
  
    // Once more, with feeling
    items.forEach((item) => {
      console.log(item);
    });
}

// Drop all lesser terms

// O(n + n^2) -> O(n^2) quadratic
function printAllNumbersThenAllPairSums(numbers) {
    console.log("these are the numbers:");
    numbers.forEach((number) => {
      console.log(number);
    });
  
    console.log("and these are their sums:");
    numbers.forEach((firstNumber) => {
      numbers.forEach((secondNumber) => {
        console.log(firstNumber + secondNumber);
      });
    });
}
