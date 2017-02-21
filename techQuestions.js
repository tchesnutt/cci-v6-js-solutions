function name(s1,s2){
  var map1 = {};
  var a1 = s1.split('');
  var a2 = s2.split('');
  var count = 0;
  a1.forEach((el) => {
    map1[el]++;
  })
  var slide = {};
  for(i = 0; i < 4; i++){
    slide[a2[i]]++
  };
  if (isEqual(slide,map1) === true){
    count++
  }
  let left = 0;
  let right = 3;
  for(i = 1; i < a2.length - 4; i++){
    slide[a2[left]]--;
    left++;
    slide[a2[right++]]++;
    if(isEqual(slide, map1) === true){
      count++;
    }
  }
}

function isEqual?(obj1, obj2) {
  var aProps = Object.getOwnPropertyNames(obj1);
  var bProps = Object.getOwnPropertyNames(obj2);
  if (aProps.length != bProps.length) {
      return false;
  }
  for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];
      if (obj1[propName] !== obj2[propName]) {
          return false;
      }
  }
  return true;
}
