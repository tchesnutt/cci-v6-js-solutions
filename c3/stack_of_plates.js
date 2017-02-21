//Goal: Imagine a stack of plates. If the stack gets too high, it might topple.
//      Therefore, in real life, we would liely start a new stack when the
//      previous stack exceeds some threshold. Implement a data structure
//      'SetofStacks' that mimics this. 'SetofStacks' should be composed of
//      several stacks and should create a new stack once the previous one
//      exceeds capacity.
//FollowUp: Implment a function popAt(index) which performs a pop operation
//          on a specific sub-stack.
import _ from 'lodash';


export class stackOfPlates {
  constructor(maxSize){
    this.stacks = {0:[]};
    this.curStack = 0;
    this.max = maxSize;
  }

  myPush(value){
    if(this.stacks[this.curStack].length >= this.max){
      ++this.curStack;
      let newStack = _.merge(this.stacks, {this.curStack: []})
    }
    this.stacks[this.curStack].push(value);
  }

  myPop(){
    let value = this.stacks[this.curStack].pop();
    if(this.stacks[this.curStack].length === 0){
      --this.curStack;
    }
    return value
  }

  peek(){
    return this.stacks[this.curStack][this.stacks[this.curStack].length - 1]
  }

  popAt(index){
    let value = this.stacks[index].pop();
    let runner = index;
    while(runner < this.curStack){
      let temp = [];
      while(this.stacks[runner + 1].length > 1){
        temp.push(this.stacks[runner + 1].pop())
      }
      this.stacks[runner].push(this.stacks[runner + 1].pop())
      while(temp.length >= 0){
        this.stacks[runner + 1].push(temp.pop())
      }
      runner++;
    }
    if(this.stacks[this.curStack].length === 0){
      --this.curStack;
    }
    return value
  }
}
