//GOAL: Assuming you have a method isSubstring, which checks if one word is a substring of another, create a function that, given two strings, checks if the second is a rotation of the first using only on call of isSubstring


function stringRotation(s1, s2){
  if(s1.length !== s2.length){
    return false;
  }
  var s1s1 = s1 + s1;
  return isSubstring(s1s1, s2);
}
