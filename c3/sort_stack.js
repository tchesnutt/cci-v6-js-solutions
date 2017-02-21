//Goal: Write a program to sort a stack such that the smallest items are on top.
//      you can use an additional stack, but you may not copy the elements into
//      any other data structure. The stack supports the following operations:
//      push, pop, peek, and isEmpty.


const sortStack = (stack) => {
  let temp = [];
  while(!stack.isEmpty){
    let curr = stack.pop();
    while(!temp.isEmpty && temp.peek() > curr){
      stack.push(temp.pop());
    }
    temp.push(cur)
  }
  while(!temp.isEmpty){
    stack.push(temp.pop());
  }
}
