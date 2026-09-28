// ====================== Graph - это произвольная сеть связей ======================
/**
 * Граф G - (V, E), где V - множество вершин (vertices / nodes), Е - множество рёбер (edges).
 *
 * В графе вершины могут связываться произвольным образом.
 * 
 * Взвешенный граф (Weighted) - граф, у которого рёбра имеют определенные веса: A --5--> B, A --2--> C.
 		Вес может означать:
			- расстояние;
			- время;
			- цену;
			- стоимость операции;
			- пропускную способность;
			- риск;
			- задержку сети.

 * Однонаправленный граф (Directed graph) - движение до вершин возможно только по одному направлению: A -> B -> C.
 * Двунаправленный граф (Undirected graph) - движение между вершинами может быть в двух направлениях: A <--> B <--> C <--> A.
 * Петля - когда из текущей вершины можно попасть в неё же: C <-> C.
 * 
 * Циклы - в графе может существовать путь, возвращающий в исходную вершину: A -> B -> C -> A.
 * Directed Acyclic Graph — ориентированный граф без циклов (некоторые графы допускают циклы, некоторые — нет): build -> test -> deploy.
 */

// ------------ Представление в коде var-1 ------------
const graph = {
  a: ['b', 'c'], // из вершины 'a' есть путь в вершины 'b' и 'c'
  b: ['e'],
  c: [
    { node: 'f', value: 5 },
    { node: 'd', value: 10 },
  ], // пример взвешенного графа
  d: ['e'],
  f: ['e'],
  e: ['g'],
};

// ещё пример взвешенного графа
const weightedGraph = {
  a: { b: 5, c: 2 },
  b: { c: 3, d: 6 },
  c: { d: 4 },
};

// ------------ Представление в коде var-2 - Матрица смежностей ------------
const matrix = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
];

const weightedMatrix = [
  [0, 5, 2, 0],
  [0, 0, 3, 6],
  [0, 0, 0, 4],
  [0, 0, 0, 0],
];

// ----------- Распространенное представление - Adjacency List -----------
// ----------------------- Undirected граф ------------------------
class Graph {
  adjacencyList = new Map<string, Set<string>>();

  addVertex(vertex: string) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set());
    }
  }

  addEdge(vertex1: string, vertex2: string) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    this.adjacencyList.get(vertex1)!.add(vertex2);
    this.adjacencyList.get(vertex2)!.add(vertex1); // для directed graph этого нет
  }

  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList.get(vertex1)?.delete(vertex2);
    this.adjacencyList.get(vertex2)?.delete(vertex1);
  }

  removeVertex(vertex: string) {
    const neighbors = this.adjacencyList.get(vertex);

    if (!neighbors) {
      return;
    }

    for (const neighbor of neighbors) {
      this.adjacencyList.get(neighbor)?.delete(vertex);
    }

    this.adjacencyList.delete(vertex);
  }
}

const grapMap = new Graph();

grapMap.addEdge('A', 'B');
grapMap.addEdge('A', 'C');
grapMap.addEdge('B', 'D');

console.log(grapMap.adjacencyList);
/**
A => { B, C }
B => { A, D }
C => { A }
D => { B }
 */
