//Goal: Write an algorithm to find the 'next' node (i.e. in-order successor) of
//      a given node in a binary search tree. You may assume that each node has
//      a link to its parent.

const successor = (node) => {
  let target = node.value + 1;
  if(node.right === undefined){
    let cur = node.parent;
    while(cur.right === undefined){
      cur = cur.parent;
    }
    cur = cur.right;
  } else {
    let cur = node.right;
  }
  while(cur.value !== target){
    cur = cur.left;
  }
  return cur;
}
