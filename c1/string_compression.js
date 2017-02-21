//Goal: Implement a method to perform basic string compressing using the couns of repeated characters.
// If the compressed string would not become smaller than the original string, the method should return the original string.
//Ex. aabcccccaaa => a2b1c5a3.

function compressString(string){
  var result = '';
  var count = 0;
  var prevLetter = string[0];
  for(i = 0; i < string.length; i++){
    if(i === 0){
      count++;
    } else if (string[i] !== prevLetter) {
      result += prevLetter;
      result += count.toString();
      prevLetter = string[i];
      count = 1;
    } else if (i === string.length - 1) {
      result += prevLetter;
      result += count.toString();
    } else if (string[i] === prevLetter) {
      count++;
    }
  }
  if(result.length > string.length) return string
  return result
}

console.log(compressString('aabcccccaaa'));
