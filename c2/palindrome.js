// Goal: Implement a function to check if a linked list is a palindrome

const isPalindrome = (n) => {
  let mid = n;
  let end = n;
  let stack = [];
  while(end.next !== null){
    stack.push(mid);
    mid = mid.next;
    end = end.next.next;
  }
  let start = n;
  while(stack.length > 0){
    let top = stack.pop();
    if(top.data !== start.data){
      return false;
    }
    start = start.next;
  }
  return true;
}
