//Goal: determin if two singly linked lists intersect. Return the intersecting
//      node. intersection is defined by reference and not value.

const findIntersection = (i, j) => {
  let l1 = 0;
  let l2 = 0;
  let runner1 = i;
  let runner2 = j;

  while(runner1.next !== null){
    runner1 = runner1.next;
    l1++;
  }
  while(runner2.next !== null){
    runner2 = runner2.next;
    l2++;
  }

  let applyDiffSecond = false;
  let diff = 0;
  if(l1 > l2){
    diff = l1 - l2;
  } else {
    diff = l2 - l1;
    applyDiffSecond = true;
  }

  runner1 = i;
  runner2 = j;
  let count = 0
  if(applyDiffSecond === true){
    while(count < diff){
      runner2 = runner2.next;
      count++;
    }
  } else {
    while(count < diff){
      runner1 = runner1.next;
      count++;
    }
  }

  while(runner1.next !== null){
    if(runner1.next === runner2.next){
      return runner1.next;
    }
    runner1 = runner1.next;
    runner2 = runner2.next;
  }

  return false
}
