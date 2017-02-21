//Goal: Given a circular linked list, implement an algorithm that returns the
//      node at the beginning of the loop.

const findCirculet = (i) => {
  let slow = i;
  let fast = i;
  while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      break;
    }
  }
  if(fast !== null && fast.next !== null){
    return null;
  }
  slow = i;
  while(slow !== fast){
    slow = slow.next;
    fast = fast.next;
  }
  return fast
}

const isCirle = (i) => {
  let slow = i;
  let fast = i.next.next;
  while(fast.next !== null){
    if(fast === slow){
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
}
