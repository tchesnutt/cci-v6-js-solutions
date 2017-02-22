//Goal: You are implementing a binary tree class from scratch which, in addition
//      to insert, find, and delete, has a method 'getRandomNode()' which
//      returns a random node from the tree. All nodes should be equally likely
//      to be chosen. Design and implement an algorithm for getRandomNode, and
//      explain how you would implement the rest of the mehtods.
class RandomBinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);
    return _traverseInsert(this.root, value, newNode);
  }

  _traverseInsert(currentNode, value, newNode){
    if(currentNode.value > value){
      if(currentNode.left === undefined){
        currentNode.left = newNode;
      } else {
        _traverse(currentNode.left, value, newNode);
      }
    } else {
      if(currentNode.right === undefined){
        currentNode.right = newNode;
      } else {
        _traverse(currentNode.right, value, newNode);
      }
    }
    return "success";
  }

  find(value){
    return _traverseFind(this.root, value);
  }

  _traverseFind(currentNode, value){
    if(currentNode.value > value){
      _traverse(currentNode.left, value, newNode);
    } else if(currentNode.value < value) {
      _traverse(currentNode.right, value, newNode);
    } else {
      return currentNode;
    }
    return false;
  }

  delete(value){

  }

  getRandomNode(tree){
    let nodes = []

    _preOrderVisit(tree.root, nodes);
    return nodes[Math.random() * (nodes.length - 1)];
  }

  _preOrderVisit(node, nodes){
    if(!node) {
      return;
    }
    nodes.push(node);
    preOrderVisit(node.left, nodes);
    preOrderVisit(node.right, nodes);
  }

}
