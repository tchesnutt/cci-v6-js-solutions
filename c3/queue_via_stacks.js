//Goal: Implement a MyQueue class which implements a queue using two stacks.

export class MyQueue{
  constructor(){
    this.first = [];
    this.second = [];
  }

  enqueue(value){
    this.first.push(value);
  }

  dequeue(){
    if(this.second.length === 0){
      while(this.first.length > 0){
        this.second.push(this.first.pop());
      }
    }
    return this.second.pop();
  }
}
