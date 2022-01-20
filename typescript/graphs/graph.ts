import { BreadthFirstSearch } from "./bfs";
import { DepthFirstSearch } from "./dfs";

export class Graph {
  readonly V: number;
  E: number;
  adj: Set<number>[];

  constructor(V: number) {
    this.V = V;
    this.E = 0;

    this.adj = new Array<Set<number>>(V);

    for (let i = 0; i < V; i++) {
      this.adj[i] = new Set<number>();
    }
  }

  public addEdge(v: number, w: number) {
    this.E++;

    this.adj[v].add(w);
    this.adj[w].add(v);
  }

  /**
   * Return degree of a vertex
   * @param v
   * @returns
   */
  public degree(v: number) {
    return this.adj[v].size;
  }
}

/**
 *
 *     0 - 1
 *    /     \
 *   3   -   2 - 4
 *
 */

let g: Graph = new Graph(5);

g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(3, 0);

console.log(g);

const search: DepthFirstSearch = new DepthFirstSearch(g);
search.dfs(g, 0);
search.doDfsIteratively(g, 0);

const bfsSearch: BreadthFirstSearch = new BreadthFirstSearch();
bfsSearch.bfs(g, 0);
