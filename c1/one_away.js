//GOAL: three kinds of edits-- insert, remove, replace. Figure out if a string is one of these edits away from another string

function oneAway(str1,str2) {
  if(str1.length === str2.length) {
    return oneEditReplace(str1,str2);
  } else if (str1.length < str2.length) {
    return oneEditAway(str1, str2);
  } else if (str1.length < str2.length) {
    return oneEditAway(str2, str1);
  }
}

function oneEditReplace(str1, str2) {
  var count = 0;
  for(i = 0; i < str1.length; i++){
    if(str1[i] !== str2[i]){
      count++;
    }
    if(count > 1) {
      return false;
    }
  };
  return true;
}

function oneEditAway(str1, str2) {
  if(str1.length - str2.length > 1) {
    return false;
  }
  var shorter = str1.length < str2.length ? str1 : str2;
  var longer = str1.length < str2.length ? str2 : str1;
  let i = 0;
  let j = 0;
  var foundDiff = false;
  while(i < shorter.length && j < longer.length) {
    if(shorter[i] !== longer[j]){
      if(foundDiff === true) {
        return false;
      }
      foundDiff = true;
      if(shorter.length === longer.length) i++;
    } else {
      i++;
    }
    j++;
  }
  return true;
}

console.log(oneEditAway("pale","ple"));
console.log(oneEditAway("pales","pale"));
console.log(oneEditAway("pale","bale"));
console.log(oneEditAway("pale","bake"));
