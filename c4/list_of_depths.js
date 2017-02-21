//Goal: Given a binary tree, design an algorithm which creates a linked list of
//      all the nodes at each depth.

const listOfDepths = (root) => {
  let list = {};
  traverse(root, 0, list);
  return list;
}

const traverse = (node, depth, list) => {
  if(!list[depth]){
    list[depth] = new LinkedList();
  }
  list[depth].append(node.value);

  traverse(node.left, ++depth, list);
  traverse(node.right, ++depth, list);
}
