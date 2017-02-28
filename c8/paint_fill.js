//Goal: Implement an algorithm to print fill function that one might see on many
//      image editing programs. That is, given a screen, a point, and a new
//      color, fill in the surrounding are until the color changes from the
//      original color.

const colorFill = (point, newColor, picture) => {
  let oldColor = picture[point[0]][point[1]].color;

  growInDirection(point, picture, oldColor, newColor);
}

const growInDirection = (startPos, picture, oldColor, newColor) => {
  let directions = [[1,1], [1,-1], [-1,1], [1,-1]];

  directions.forEach((dir) => {
    let nextX = startPos[0] + dir[0];
    let nextY = startPos[1] + dir[1];
    if((nextX >= 0 && nextX < picture.length) && (nextY >= 0 && nextY < picture.length)){
      let nextPos = picture[nextX][nextY];
      if(nextPos.color === oldColor){
        nextPos.color = newColor;
        growInDirection([nextX, nextY], picture, oldColor, newColor);
      }
    }
  })
}
