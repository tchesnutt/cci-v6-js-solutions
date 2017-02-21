//Goal: Design an algorithm and write code to find the first common ancestor of
//      two nodes in a binary tree. Avoid storing additional nodes in a data
//      structure. NOTE: this is not a binary search tree.


//With Links to Parents
const fristCommonAncestor = (node1, node2) => {
  let discovered = new Set();
  let diff = height(node1) - height(node2);
  let shallow = diff > 0 ? node2 : node1;
  let deep = diff > 0 ? node1 : node2;
  deep = goUpBy(deep, Math.abs(diff));
}

const height = (node) => {
  let count = 0;
  while(node !== undefined){
    node = node.parent;
    count++;
  }
  return count;
}

const goUpBy = (node, delta) => {
  while(delta > 0 && node !== undefined){
    node = node.parent;
    delta--;
  }
  return node;
}
