//Goal: Given a directed graph, design an algorithm to find out whether there is
//      a route between two nodes.


const routeBetweenBFS = (node, target) => {
  let discoverd = new Set();
  let queue = [node];

  while(queue.length > 0){
    let cur = queue.pop();
    cur.adjacent.forEach((n) => {
      if(!discoverd.has(n)){
        if(n === target) return true;
        discoverd.add(n);
        queue.unshift(n);
      }
    })
  }
  return false;
}

const routeBetweenDFS = (node, target, discovered = new Set()) => {
  if(node === target){
    return true;
  }

  discovered.add(node);
  node.adjacent.forEach((n) => {
    if(!discovered.has(n)){
      if(routeBetweenDFS(n, target, discovered)){
        return true;
      }
    }
  })
  return false
}
