const removeDups = (start) => {
  let curNode = start;
  let prevNode = start;
  while(curNode.next !== null){
    let nextNode = curNode.next;
    while(nextNode.next !== null){
      if(curNode.val === nextNode.val){
        let delNode = nextNode;
        nextNode = nextNode.next;
        prevNode.next = delNode.next;
        prevNode = prevNode.next;
        delNode.next = null;
      } else {
        nextNode = nextNode.next;
      }
    }
    curNode = curNode.next;
  }
}
