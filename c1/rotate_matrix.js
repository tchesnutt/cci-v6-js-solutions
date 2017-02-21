//Goal: given an image represented by an NxN matrix, wher each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Do this in place


function rotateMatrix(matrix) {
  if(matrix.length === 0 || matrix.length !== matrix[0].length) {
    return false;
  }

  for(layer = 0; layer < matrix.length / 2; layer++){
    var first = layer;
    var last = matrix.length - 1 - layer;

    for(i = first; i < last; i++){
      var offset = i - first;
      var top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top
    }
  }
  return matrix;
}
