//Goal: Implement a function to check if a binary tree is a binary search tree.

const validateBSTInOrderTraversal = (root) => {
  let array = [];
  copyBST(root, array);
  for(i = 0; i < array.length - 1; i++){
    if(array[i] <= array[i - 1]) return false;
  }
  return true;
}

const copyBST = (root, array = []) => {
  if(root === null) return;
  copyBST(root.left, array);
  array.push(root.data);
  idx++;
  copyBST(root.right, array)
}
