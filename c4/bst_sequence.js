//Goal: A binary search tree was created by traversing through an array from
//      left to right and inserting each element. Given a binary search tree
//      with distinct elements, print all possible arrays that could have led
//      to this tree.


const bstSequence = (tree) => {
  if(!tree || !tree.root){
    return null;
  }

  return sequenceRecursive(tree.root);
}

const sequenceRecursive = (node) => {
  if(!node){
    return null;
  }

  let perms = permutations(sequenceRecursive(node.left), sequenceRecursive(node.right));
  if(!perms){
    perms = [[node.value]];
  }
  perms.forEach(el => el.unshift(node.value));
  return perms;
}

const permuations = (left, right) => {
  if(!left || !right){
    return left || right;
  }
  let perms = [];
  for(i = 0; i < left.length; i++){
    for(j = 0; j < right.length; j++){
      perms.push.apply(perms, permuationsRecursive([], left[i], right[j], [], 0, 0));
    }
  }
  return perms;
}

const permuationsRecursive = (perms, list1, list2, prefix, i, j) => {
  if(i === list1.length && j === list2.length){
    perms.push(prefix.slice(0));
  } else {
    if(i < list1.length){
      prefix.push(list1[i]);
      permutationsRecursive(perms, list1, list2, prefix, i + 1, j);
      prefix.pop();
    }
    if(j < list2.length){
      prefix.push(list2[j]);
      permutationsRecursive(perms, list1, list2, prefix, i, j + 1);
      prefix.pop();
    }
  }
  return perms;
}
