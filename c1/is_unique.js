//GOAL: create a function to determine if a string has all unique characters

function isUnique(str) {
  var arr = str.split('');
  var include = {};
  var truth = true
  arr.forEach( el => {
    if(include[el] === true){
      truth = false;
      return;
    }
    include[el] = true;
  })
  return truth;
}

console.log(isUnique("bnsk"));
