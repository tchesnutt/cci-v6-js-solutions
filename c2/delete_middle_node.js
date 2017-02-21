//Goal:Implement and algorithm to delete a node in the middle of a singly linked list, given only access to that node.

const deleteMiddleNode = (currentNode) => {
  if(currentNode.next === null || currentNode === null){
    return false;
  }
  let next = currentNode.next;
  currentNode.data = next.data;
  currentNode.next = next.next;
  return true;
}
