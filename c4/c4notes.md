## Trees and Graphs
---
Note: Some of the terms in this chapter can vary slightly across different textbooks and other sources. Make sure you clear up any ambiguity with the interviewer.

### Types of Trees
  A tree is a data structure composed of nodes.

  * Each tree has a root node.
  * The root node has zero or more child nodes.
  * Each child node has zero or more child nodes, and so on....

The tree cannot contain cycles. The nodes may or may not be in a particular order, they could have any data type as values, and they may or may not have links back to their parent nodes.
  A very simple class definition for a Node is:

  ```javascript
    class Node {
      constructor(value, children){
        this.value = value;
        this.children = children;
      }
    }
  ```

  You might also have a 'Tree' class to wrap this node. For purposes of interview questions, we typically do not use a 'Tree' class. You can, but it rarely helps. Tree and graph questions are rife with ambiguous details and incorrect assumptions. Be sure to watch out for the following issues and seek clarification when necessary.

#### Trees vs Binary Trees
  A binary tree is a tree in which each node has up to two children. A node is called a 'leaf' node if it has no children.

#### Binary Tree vs. Binary Search Tree
  A binary search tree is a binary tree in which every node fits a specific ordering property: `all left descendants <= n < all right descendants`. This must be true for each node n.
  The definition of a binary search tree can vary slightly with respect to equality. Under some definitions, the tree cannot have duplicate values. In others, the duplicate values will be on the right or can be on either side. All are valid definitions, but you should clarify this.

  Note that this inequality must be true for all of a node's descendants, not just its immediate children.

  When given a tree question, many people assume the interview means a binary search tree. Be sure to ask. A binary search tree imposes the condition that, for each node, its left descendants are less than or equal to the current node, which is less than the right descendants.

#### Balanced vs. Unbalanced
  A balancing tree does not mean the left and right subtrees are exactly the same size. One way to think about it is that a 'balanced' tree really means something more like 'not terribly imbalanced'. It's balanced enough to ensure O(logN) times for insert and find, but it's not necessarily as balanced as it could be.

#### Complete Binary Trees
  A complete binary tree is a binary tree in which every level of the tree is fully filled, expect for the last level.

#### Full Binary Trees
  A full binary tree is a binary tree in which every node has either zero or two children. That is, no nodes have only one child.

#### Perfect Binary Trees
  A perfect binary tree is one that is both full and complete. All leaf nodes will be at the same level, and this level has the maximum number of nodes.

---

### Binary Tree Traversal
#### In-Order Traversal
  In-order traversal means to 'visit'(often, print) the left branch, then the current node, and finally the right branch.
  ```javascript
  const inOrderTraversal = (node) => {
    if(node != null){
      inOrderTraversal(node.left);
      visit(node);
      inOrderTraversal(node.right);
    }
  }
  ```
  When performed on a BST, it visits nodes in ascending order.

#### Pre-Order Traversal
  Visits the current node before its child nodes.
  ```javascript
  const preOrderTraversal = (node) => {
    if(node != null){
      visit(node);
      inOrderTraversal(node.left);
      inOrderTraversal(node.right);
    }
  }
  ```
  The root is always the first node visited.

#### Post-Order Traversal
  Post-order traversal visits the current node after its child nodes.
  ```javascript
  const preOrderTraversal = (node) => {
    if(node != null){
      inOrderTraversal(node.left);
      inOrderTraversal(node.right);
      visit(node);
    }
  }
  ```
  In a post-order traversal, the root is always the last node visited

### Binary Heaps (Min-Heaps and Max-Heaps)
  We'll discuss min-heaps here. Max-heaps are essentially equivalent, but the elements are in descending order rather then ascending order. A min-heap is a complete binary tree (that is, totally filled other than the rightmost elements on the last level) where each node is smaller than its children. The root, therefore is the minimum element on the tree.

  There are two key operations on a min-heap: insert and extract_min.
#### Insert
  When we insert into a min-heap we always start by inserting the element at the bottom. We insert at the rightmost spot so as to maintain the complete tree property.

  Then, we 'fix' the tree by swapping the new element with its parent, until we find an appropriate spot for the element. We essentially bubble up the minimum element. This takes O(logN) time, where n is the number of nodes in the heap.

#### Extract Minimum Element
  Finding the minimum element of a min-heap is easy. It's always at the top. The trickier part is how to remove it.
  First, we remove the minimum element and swap it with the last element in the heap (the bottommost, rightmost element). Then, we bubble down this element, swapping it with one of its children until the min-heap property is restored.

  Do we swap it with the left child or the right child? That depends on their values. There's no inherent ordering between the left and right element, but you'll need to take the smaller one in order to maintain the min-heap ordering.

---
### Tries (Prefix Trees)
  A trie is a variant of an n-ary tree in which characters are stored at each node. Each path down the tree may represent a word.

  The `*` nodes (called the 'null nodes') are often used to indicate complete words. For example, the fact that there is a `*` node under MANY indicates that MANY is a complete word. The existence of the MA path indicates there are words that start with MA.

  The actual implementation of these * nodes might be a special type of child. Or, we could use just a boolean flag in the parent node.

  A node in a trie could have anywhere from 1 to ALPHABET_SIZE + 1 children.

  Very commonly, a trie is used to store the entire language for quick prefix lookups. While a hash table can quickly look up whether a string is a valid word, it cannot tell us if a string is a prefix of any valid words. How quickly? O(K) time, where K is the length of the string. This is actually the same runtime as a hash table will take. Although we often refer to hash table lookups as being O(1) time, this isn't entirely true. A hash table must read through all the characters in the input, which takes O(K) time in the case of a word lookup.

  Many problems involving lists of valid words leverage a trie as an optimization. In situations when we search through the tree on related prefixes repeatedly, we might pass around a reference to the current node in the tree. This will allow us to just chick if Y is a child of MAN, rather than starting from the root each time.

---
### Graphs
  A tree is actually a type of graph, but all graphs are trees. Simply put, a tree is a connected graph without cycles.

  A graph is simply a collection of nodes with edges between (some of) them.

  * Graphs can be either directed (like the following graphs) or undirected. While directed edges are like a one*way street, undirected edges are like two way streets.
  * The graph can also have cycles (or not). An 'acyclic graph' is one without cycles.

In terms of programming, there are two common ways to represent a graph.

#### Adjacency List
  Most common. Every vertex (or node) stores a list of adjacent vertices. In an undirected graph, an edge like (a,b) would be stored twice: once in a's adjacent vertices and once in b's adjacent vertices. A simple class definition for a node could look essentially the same as a tree node.
  ```javascript
    class Graph {
      constructor(nodes = []){
        this.nodes = nodes;
      }
    }

    class Node {
      constructor(name, children = []){
        this.name = name;
        this.children = children;
      }
    }
  ```
  The Graph class is used because, unlike in a tree, you can't necessarily reach all the nodes from a single node. You don't necessarily need any additional classes to represent a graph. An array (or hash table) of lists can store the adjacency list.

#### Adjacency Matrixes
  An adjacency matrix is an NxN boolean matrix (where N is the number of nodes), where a `true` value at `matrix[i][j]` indicates an edge from node `i` to node `j`. In an undirected graph, an adjacency matrix will be symmetric. In a directed graph, it will not necessarily be.

  The same graph algorithms that are used on adjacency lists can be performed with adjacency matrices, but they may be somewhat less efficient. In the adjacency list representation, you can easily iterate through the neighbors of a node. In the adjacency matrix representation, you will need to iterate through all the nodes to identify a node's neighbors.

### Graph Search
  The two most common ways to search a graph are depth first-search and breadth-first search.

  In depth-first search (DFS), we start at the root (or another arbitrarily selected node) and explore each branch completely before moving on to the next branch. That is, we go deep first before going wide.

  Breadth-frist search (BFS), we start at the root (or another arbitrarily selected node) and explore each neighbor before going on to any of their children. That is we go wide before we go deep.

  The DFS is often preferred if we want to visit every node in the graph. Both will work just fine, but depth-first search is a bit simpler.

  However if we want to find the shortest path (or just any path) between two nodes, BFS is generally better. Consider representing all the friendships in the entire world in a graph and trying to find a path of friendships between `Ash` and `Vanessa`.

  In DFS, we could take a path like `Ash -> Brian -> Carleton -> Davis -> Eric -> Farah -> Gayle -> Harry -> Isabella -> John -> Kari...` and then find ourselves very far away. We could go through most of the world without realizing that, in fact `Vanessa` is `Ash`'s friend. We'd get an answer, but it would take a very long time. We would also not have the shortest path.

  In BFS, we would stay close to `Ash` for as long as possible. We might iterate through `Ash`'s friends, but we wouldn't go to his more distant connections until absolutely necessary.

##### Depth-First Search (DFS)
  In DFS, we visit a node `a` and then iterate through each of `a`'s neighbors. When visiting a node `b` that is a neighbor of `a`, we visit all of of `b`'s neighbors before going on to `a`'s other neighbors. That is, `a` exhaustively searches `b`'s branch before any of its other neighbors.

  Node that pre-order and other forms of tree traversal are a form of DFS. The key difference is that when implementing this algorithm for a graph, we must check if the node has been visited. If we don't, we risk getting stuck in an infinite loop.

  The pseudocode below implements DFS:
  ```javascript
    const DFS = (root) => {
      if(root === null) return null;
      visit(root);
      root.visited = true;
      root.adjacent.forEach((n) => {
        if(n.visited === false){
          DFS(n);
        }
      })
    }
  ```

##### Breadth-First Search (BFS)
  BFS is a bit less intuitive, and many interviewees struggle with the implementation unless they are not familiar with it. The main tripping point is the (false) assumption that BFS is recursive. Instead, use a queue.

  In BFS, node `a` visits visits each of it's neighbors before visiting any of their neighbors. You can think of this as searching by level out from `a`. An iterative solution involving a queue usually works best.
  ```javascript
    const BFS = (root) => {
      let queue = new Queue;
      root.marked = true;
      queue.enqueue(root);

      while(!queue.isEmpty()){
        let current = queue.dequeue();
        visit(current);
        current.adjacent.forEach((n) => {
          if(n.marked === false){
            n.marked = true;
            queue.enqueue(n)
          }
        })
      }
    }
  ```
  If asked to implement a BFS, *remember to use a queue*. The rest of the algorithm flows from this fact.

##### Bidirectional Search (BIS)
  BIS is used to find the shortest path between a source and destination node. It operates by essentially running two simultaneous BFS searches, one from each node. When their searches collide, a path has been found.

  To see why it is faster, consider a graph where every node as at most `k` adjacent nodes and the shortest path from node `s` to node `t` has length `d`.
  * In traditional BFS, we would search up to `k` nodes in the first 'level' of the search. In the second level, we would search up to `k` nodes for each of those first `k` nodes, so `k^2` nodes total (thus far). We would have to do this `d` times, so that's `O(k^d)` nodes.
  * In BIS, we have two searches that collide after approximately `d/2` levels (the midpoint of the path).  The search from `s` visits approximately `k^d/2`, so does the search from `t`. That's approximately `2k^d/2` or `O(k^d/2)`, nodes total.

This might seem like a minor difference, but it's 'UUUGE. Recall that `(k^d/2) * (k^d/2) = k^d`. The BIS search is actually faster than BFS by a factor of `k^d/2`.

Put another way: if our system could only support searching 'friend of friend' paths in BFS, it could now likely support 'friend of friend of friend of friend' paths. We can support paths that are twice as long.
