// function isPalindrome(word) {
//   // if 'reversed' and 'word' are same
//   //   return true
//   // else
//   //   return false
//   return reverse(word) === word

// }

function isPalindrome(word) {
  // iterate from beginning of word to the middle
  // compare the letter we're iterating on to the corresponding letter from the end
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    let endIndex = word.length - 1 - startIndex
    // if they don't match, return false
    if (word[startIndex] !== word[endIndex]){
      return false
    }
  }
  // if we reach the middle and all match, return true
  return true
}


function reverse(word) {
  // initialize 'reversed' var as ""
  let reversed = ""
  
  // iterate through the word and concatenate each char to 'reversed'
  for (let i=0; i<word.length; i++) {
    reversed = word[i] + reversed
  }

  return reversed
}

/* 
  Add your pseudocode here
initialize 'reversed' var as ""

iterate through the word and concatenate each char to 'reversed'

if 'reversed' and 'word' are same
  return true
else
  return false

*/

/*
iterate from beginning of word to the middle
compare the letter we're iterating on to the corresponding letter from the end
if they don't match, return false
if we reach the middle and all match, return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("deed"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("deer"));
}

module.exports = isPalindrome;
