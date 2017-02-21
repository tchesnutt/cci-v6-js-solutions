//Goal: Given a sorted (increasing order) array with unique integer elements,
//      write and algorithm to create a binary search tree with minimal height.

const minimalTree = (array) => {
  let tree = new Tree();
  if(array.length > 0){
    add(tree, array, 0, array.length - 1);
  }
  return tree;
}

const add = (tree, values, start, end) => {
  if(start === end){
    tree.add(values[start]);
  } else {
    let mid = MATH.floot(end - start / 2) + start
    tree.add(values[mid]);
    add(tree, values, start, mid - 1);
    add(tree, values, mid + 1, end);
  }
}
