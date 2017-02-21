//Goal: You have two numbers represented by a linked list, where each node
//      contains a single digit. The digits are stored in reverse order, such
//      that the 1's digit is at the head of the list. Write a function that
//      adds the two numers and returns the sum as a linked list.

const sumList = (i, j) => {
  let plusOne = 0;
  let first = i;
  let second = j;
  let returnList = new Node;
  let prevNode = returnList;
  while(first.next !== null && second.next !== null && plusOne === 0){
    let nextNode = new Node;
    if(first.data + second.data + plusOne > 9){
      nextNode.data = 0
      plusOne = 1;
    } else {
      nextNode.data = first.data + second.data + plusOne;
      plusOne = 0
    }
    prevNode.next = nextNode;
    prevNode = prevNode.next;
  }
  return returnList;
}
