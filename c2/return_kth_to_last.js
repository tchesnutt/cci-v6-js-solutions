//Goal: Implement an algorithm to find the kth to last ememtn of a singly linked list

const findKthtoLastElement = (start, k) => {
  let length = 0;
  let runner = start;
  while(runner.next !== null){
    runner = runner.next;
    length++;
  }
  let n = length - k;
  let count = 0;
  runnner = start;
  while(count <= n){
    runner = runner.next;
    count++;
  }
  return runner;
}
