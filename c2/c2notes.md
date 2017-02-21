## Linked Lists
------
  A linked list is a data structure that represents a sequence of nodes. There are two main types:
    - Singly linked list
      Each node points to the next node in the linked list.
      Ex:  |1| => |2| => |3| => ...

    - Doubly linked list
      Each node's pointer to both the next node and previous node.
      Ex:  |1| <=> |2| <=> |3| <=> ...

  Unlike arrays linked lists do not provide constant time access to a particular 'index' within the list. This means that if you'd like to find the Kth element in the list, you will need to iterate through K elements. The benefit of a linked list is that you can add and remove items from the beginning of the list in constant time.
### Singly Creation
---
```javascript
class Node {
  constructor(data){
    this.next = null;
    this.data = data;
  }

  appendToTail(d){
    var end = new Node(d);
    var n = this;
    while(n.next !== null){
      n = n.next;
    }
    n.next = end;
  }
}
```

### Singly Deletion
---
Method: Given an node n, we find the previous node `prev` and set `prev.next` equal to `n.next`. If the list is double linked you must update `n.next` to set `n.next.prev` equal to `n.prev`.  The important things to remember are:
  1) to check for the `null` pointer
  2) to update the head or tail pointer as necessary

  ```javascript
  deleteNode(head, d) {
    var n = head;
    if(n.data === d){
      return head.next;
    }
    while(n.next !== null){
      if(n.next.data === d){
        n.next = n.next.next;
        return head;
      }
      n = n.next;
    }
    return head;
  }
  ```

### The 'Runner' Technique
---
The 'Runner' Technique (or second pointer) is used in many linked list problems. The runner technique means you iterate through the linked list with two pointers simultaneously, with one ahead of the other. The 'fast' node might be ahead by a fixed amount, or it might be hopping multiple nodes for each one node that the 'slow' node iterates through.
For example you can use this to find the midpoint of the list. P1 hops two nodes for every node P2 hops. Therefore when P1 hits the end, P2 should be at the halfway point.

### Recursion
---
A number of linked list problems rely on recursion. If you're having trouble solving a linked list problem, you should explore if a recusive approach will work. Remember that recursive algorithms take at lest O(n) space, where n is the depth of the recursive call.


#### FUTURISM
 - plenty of room to refractor intersection.
