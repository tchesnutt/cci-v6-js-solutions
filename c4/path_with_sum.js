//Goal: You are given a binary tree in which each node contains an integer
//      value (which might be + or -). Design an algorithm to count the number
//      of paths that sum to a given value. The path does not need to start or
//      end at the root or a leaf, but it must go downwards.

const pathWithSum = (root, value) => {
  let count = 0;
  let runningSum = 0;
  goDown(root, value, count, runningSum);
  return count;
}

const goDown = (node, value, count, runningSum) => {
  runningSum += node.value
  if(value === runningSum){
    count++;
  }
  goDown(node.left, value, count, runningSum);
  goDown(node.left, value, count, 0);
  goDown(node.right, value, count, runningSum);
  goDown(node.right, value, count, 0);
}
