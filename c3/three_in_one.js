//Goal: Describe how you could use a single array to implement three stacks.


export class tripleStack {
  constructor(){
    this.array = [];
    this.lengths = [0,0,0];
  }

  getLength(stack){
    return this.lengths[stack - 1];
  }

  push(stack, value){
    let idx = this.getLength(stack) * 3 + stack - 1;
    this.array[idx] = value;
    ++this.lengths[stack - 1];
  }

  pop(stack){
    let length = this.getLength(stack);
    let value = undefined;
    if(length > 0){
      let idx = (length - 1) * 3 + stack - 1;
      value = this.array[idx],
      this.array[idx] = undefined;
      --this.lengths[stack - 1];
    }
    return value
  }

  peek(){
    let length = this.getLength(stack);
    let value = undefined;
    if(length > 0){
      let idx = (length - 1) * 3 + stack - 1;
      value = this.array[idx],
    }
    return value
  };

  isEmpty(){
    return this.getLength(stack) === 0;
  }
}
