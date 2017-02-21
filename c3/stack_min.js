//Goal: How would you ddesign a stack which, in addition to push and pop, has a
//      function min which returns the minimum element? Push, pop, and min
//      should all operate in O(1) time.

export class minStack {
  constuctor(){
    this.stack = [];
  }

  push(value){
    let min = this.min();
    if(!min) min = value;
    this.stack.push({
      value: value,
      min: Math.min(min, value)
    });
  }

  pop(){
    if(this.stack.length > 0){
      let mostRecent = this.stack.pop();
      return mostRecent.value;
    }
  }

  peek(){
    if(this.stack.length > 0){
      let mostRecent = this.stack[this.stack.length - 1];
      return mostRecent.value;
    }
  }

  min(){
    if(this.stack.length > 0){
      let mostRecent = this.stack[this.stack.length - 1];
      return mostRecent.min;
    }
    return false;
  }
}
