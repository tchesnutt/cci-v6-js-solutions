//Goal: Given a list of projects and list of dependencies (which is a list of
//      pairs of projects, where the second project is dependent on the first
//      project). All of a projec's dependencies must be built before the
//      project is. Find a build order that will allow the projects to be built.
//      If there is no valid build order, return an error.

const buildOrder = (projects, dependencies) => {
  let adj = {};
  let discovered = new Set();
  let path = new Set();
  let result = [];

  projects.forEach((p) => adj[p] = []);
  dependencies.forEach((d) => adj[d[1]].push(d[0]));
  projects.forEach((p) => topologicalSort(p, discovered, adj, finished, path))

  return result;
}

const topologicalSort = (project, discovered, adj, result, path) => {
  if(discovered.has(project)){
    return;
  }

  discovered.add(project);
  path.add(project);
  adj[project].forEach((neighbor) => {
    if(path.has(neighbor)){
      throw new Error("paths are cyclic");
    }
    topologicalSort(neighbor, discovered, adj, finished, path);
  })
  path.delete(project);
  result.push(project);
}
