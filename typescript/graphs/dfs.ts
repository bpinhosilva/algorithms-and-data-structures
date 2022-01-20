import { Graph } from "./graph";

export class DepthFirstSearch {
  visited: boolean[];

  constructor(graph: Graph) {
    this.clearVisited(graph);
  }

  /**
   * T: O(V + E)
   */
  private doDfs(graph: Graph, v: number) {
    this.visited[v] = true;

    console.log("Visiting " + v);

    for (const w of [...graph.adj[v]]) {
      if (!this.visited[w]) {
        this.doDfs(graph, w);
      }
    }
  }

  private clearVisited(g: Graph) {
    this.visited = new Array<boolean>(g.V).fill(false);
  }

  public dfs(graph: Graph, v: number) {
    this.clearVisited(graph);

    this.doDfs(graph, v);
  }

  public doDfsIteratively(g: Graph, v: number) {
    const stack: Array<number> = [];

    this.clearVisited(g);

    stack.push(v);

    while (stack.length > 0) {
      let n: number = stack.pop();

      if (!this.visited[n]) {
        console.log("Visiting " + n);
      }

      this.visited[n] = true;

      for (const w of [...g.adj[n]]) {
        if (!this.visited[w]) {
          stack.push(w);
        }
      }
    }
  }
}
