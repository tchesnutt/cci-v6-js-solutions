//Goal: Implement a function to check if a binary tree is balanced. For the
//      purposes of this question, a balanced tree is defined to be a tree such
//      that the heights of the two subtrees of any node never differ by more
//      than one.


const checkHeight = (node) => {
  if(node === null) return -1;

  let leftHeight = checkHeight(node.left);
  if(leftHeight === -1) return -1;
  let rightHeight = checkHeight(node.right);
  if(rightHeight === -1) return -1;

  let diff = leftHeight - rightHeight;

  if(Math.abs(diff) > 1){
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1
  }
}

const isBalanced = (root) => {
  return checkHeight(root) !== -1;
}
