//Goal: T1 and T2 are two very large binary trees, with T1 much bigger than T2.
//      Create an algorithm to determine if T2 is a subtree of T1. A tree T2 is
//      a subtree of T1 if there exists a node n in T1 such that the subtree of
//      n is identical to T2. That is, if you cut off the tree at node n, the
//      two trees would be identical.


const checkSubtree = (tree1, tree2) => {
  let string1 = "";
  let string2 = "";

  getOrderString(tree1, string1);
  getOrderString(tree2, string2);

  return string1.indexOf(string2) !== -1;
}

const getOrderString = (node, string) => {
  if(node.value === undefined){
    string.concat("X");
    return;
  }
  string.concat(node.value);
  getOrderString(node.left, string);
  getOrderString(node.right, string);
}
