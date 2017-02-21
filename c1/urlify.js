//GOAL: make a method to replace all spaces in a string with '%20'.

function URLify(str){
  var arr = str.split('');
  var result = "";
  arr.forEach( (el) => {
    if(el === " "){
      result += "%20";
    } else {
      result += el
    }
  });
  return result
}
var a = "Mr John Smith";
console.log(URLify(a));
