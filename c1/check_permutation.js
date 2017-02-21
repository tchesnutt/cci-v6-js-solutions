//GOAL: given two strings write a method to decide if one is a permuatation of another

function isPermuation(str1, str2) {
  var arr1 = str1.split('');
  var arr2 = str2.split('');
  var obj1 = assignArraytoObj(arr1);
  var obj2 = assignArraytoObj(arr2);

  return isEqual(obj1, obj2);
}

function isEqual(obj1, obj2) {
  var aProps = Object.getOwnPropertyNames(obj1);
  var bProps = Object.getOwnPropertyNames(obj2);
  if (aProps.length != bProps.length) {
      return false;
  }
  for(var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];
      if (obj1[propName] !== obj2[propName]) {
          return false;
      }
  }
  return true;
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

console.log(isPermuation("ebs", "sba"))
