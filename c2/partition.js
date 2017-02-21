//Goal: write code to partition a linked list areound a value x, such that all
//      nodes less than x come before all nodes greater than or equal to x. If x is
//      contained within the list, the calues of x only need to be after the elements
//      less than x. The partition element x can appear anywhere in the "right
//      partition"; it does not need to appear between the left and right partitions.

const partitionOnX = (head, partition) => {
  let left = new Node();
  let right = new Node();
  let rightSave = right;
  let curNode = head;
  while(curNode.next !== null){
    if(curNode.data < partition) {
      left.next = curNode;
      left = left.next;
    } else {
      right.next = curNode;
      right = right.next;
    }
    curNode = curNode.next;
  }
  left.next = rightSave.next;
  return right;
}
