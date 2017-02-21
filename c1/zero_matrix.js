//GOAL: Write an algorithm such that if an element in an MxN matrix is 0, it's entire row and column are set to 0

function zeroMatrix(matrix) {
  var zeroRow = new Set();
  var zeroCol = new Set();
  for (i = 0; i < matrix.length; i++){
    for(j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] === 0) {
        zeroRow.add(i);
        zeroCol.add(j);
      }
    }
  }
  for (i = 0; i < matrix.length; i++){
    for(j = 0; j < matrix[0].length; j++){
      if(zeroRow.has(i)) {
        matrix[i][j] = 0;
      } else if (zeroCol.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

var guy = [[1,2,3,4],[5,6,7,8],[9,0,11,12]];

console.log(zeroMatrix(guy))
