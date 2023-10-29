// 3 ways to think of building graphs

// Edge List - shows the connections between nodes
const graph = [[0,2], [2,3], [2,1], [1,3]];

// Adjacency List - shows the connections between nodes and the values of the nodes
// And in this case, we can create a graph where the index is the node and the value is the nodes neighbors.
const graph = [[2], [2,3], [0,1,3], [1,2]];

// Adjacency Matrix 
// This matrix is simply going to have zeros and ones indicating whether the Node X has a connection to node Y. Zero means no. One means yes.
const graph = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]

or 

const graph = {
    0: [2],
    1: [2,3],
    2: [0,1,3],
    3: [1,2]
}