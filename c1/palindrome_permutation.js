//GOAL: given a string write a function to check if it is a permuation of a palindrome.
// palindrome does not have to be a dictionary word

function palindromePermutation(string) {
  var arr = string.split("");
  var obj = assignArraytoObj(arr);
  var key = Object.getOwnPropertyNames(obj);
  var odd = 0;
  key.forEach((el) => {
    if(obj[el] % 2 !== 0){
      odd++;
    }
  });
  if((odd === 2) && (obj[" "] === 1)){
    return true;
  } else if((odd === 1) || (odd === 0)){
    return true;
  }
  return false
}

function assignArraytoObj(arr) {
  var newObj = {};
  arr.forEach((el) => {
    if(newObj[el] === undefined) {
      newObj[el] = 1;
    } else {
      newObj[el]++;
    }
  })
  return newObj;
}

console.log(palindromePermutation("tact coa"));
console.log(palindromePermutation("bonertown"));
