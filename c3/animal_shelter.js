//Goal: An animal  shelter has cats and dogs. It operates strictly on a "first
//      in, first out" basis. People must adopt either the 'oldest' of all
//      animals at the shelter, or they can select whether they would prefer a
//      dog or a cat (and will recieve the oldest of that type). Create a data
//      structure to maintain this system and implement operations such as,
//      enqueue, dequeueAny, dequeueDog, and dequeueCat.

export class AnimalQueue {
  constructor(){
    this.dogs = [];
    this.cats = [];
    this.id = 0;
  }

  enqueueCat(cat){
    this.cats.unshift({animal: cat, id: this.id})
    id++;
  }

  enqueueDog(dog){
    this.dogs.unshift({animal: dog, id: this.id})
    id++;
  }

  dequeueDog(){
    return this.dogs.pop().animal;
  }

  dequeueCat(){
    return this.cats.pop().animal;
  }

  dequeueAny(){
    //must have dogs and cats in queues
    if(this.dogs[this.dogs.length - 1].id > this.cats[this.cats.length - 1].id){
      return this.dogs.pop().animal;
    } else {
      return this.cats.pop().animal;
    }
  }
}
