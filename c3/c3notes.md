## Stacks and Queues
---
### Implementing a Stack
  Stacks use LIFO (last-in-first-out) ordering. That is, as in a stack of dinner plates, the most recent item added to the stack is the first item to be removed.
  It uses the following operations:
    - pop(): remove the top item.
    - push(item): add an item to the top.
    - peek(): returns the top of the stack.
    - isEmpty(): returns true if the stack is empty.

  Unlike an array, a stack does not offer constant-time access to the ith item. However, it does allow constant time adds and removes, as it doesn't require shifting elements around.

  Simple implementation of a stack. Note: a stack can also be implemented using a linked list, if items were added and removed from the same side.
  ```javascript
    const Stack = () => {
      this.top = null;
      this.size = 0;
    };

    const Node = (data) => {
      this.data = data;
      this.previous = null;
    };

    Stack.prototype.push = (data) => {
      let node = new Node(data);

      node.previous = this.top;
      this.top = node;
      this.size += 1;
      return this.top;
    };

    Stack.prototype.pop = () => {
      temp = this.top;
      this.top = this.top.previous;
      this.size -= 1;
      return temp;
    };

    Stack.prototype.peek = () => {
      if(this.top === null){
        return "error";
      } else {
        return top.data;
      }
    }
  ```
  One case where stacks are often useful is in certain recursive algorithms. Sometimes you need to push temporary data onto a stack as you recurse, but then remove them as you backtrack (for example, because the recursive check failed).
  A stack can also be used to implemented a recursive algorithm iteratively.

### Implementing a Queue
  A queue implements FIFO(first-in first-out) ordering. As in a line at a ticket stand, items are removed from the data structure in the same order that they are added. It uses the following operations:
    - enqueue(item): Add an item to the end.
    - dequeue(): remove the first item in the list.
    - peek(): return the top of the queue.
    - isEmpty(): returns true if and only if the queue is empty.

  A queue can also be implemented with a linked list. In fact, they are essentially the same thing, as long as items are added and removed from opposite sides.

  ```javascript
    const Queue = () => {
      this.first = null;
      this.size = 0;
    };

    const Node = (data) => {
      this.data = data;
      this.next = null;
    };

    Queue.prototype.enqueue = (data) => {
      let node = new Node(data);

      if (!this.first){
        this.first = node;
      } else {
        n = this.first;
        while (n.next) {
          n = n.next;
        }
        n.next = node;
      }

      this.size += 1;
      return node;
    };

    Queue.prototype.dequeue = () => {
      temp = this.first;
      this.first = this.first.next;
      this.size -= 1;
      return temp;
    };
  ```

  It is especially easy to mess up the updating of the first and last nodes in a queue.
  One place where queues are often used is in breadth-first search or in implementing a cache.
  In breath-first search, for example, we used a queue to store a list of the nodes that we need to process. Each time we process a node, we add its adjacent nodes to the back of the queue. This allows us to process nodes in the order in which they are viewed.
