import { Graph } from "./graph";

export class BreadthFirstSearch {
  visited: Array<boolean>;

  private doBfs(g: Graph, v: number) {
    const queue: Array<number> = [];

    queue.push(v);

    while (queue.length > 0) {
      let n: number = queue.shift();

      if (!this.visited[n]) {
        console.log("Visiting ", n);
      }

      this.visited[n] = true;

      for (const w of [...g.adj[n]]) {
        if (!this.visited[w]) {
          queue.push(w);
        }
      }
    }
  }

  public bfs(g: Graph, v: number) {
    this.visited = new Array<boolean>(g.V).fill(false);

    this.doBfs(g, v);
  }
}
