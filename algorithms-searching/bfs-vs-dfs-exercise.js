// Types of interview questions:

//If you know a solution is not far from the root of the tree:
// BFS - because it starts searching the closest nodes to the Parent, first

//If the tree is very deep and solutions are rare: 
// BFS - DFS will take long time). And the reason we would do that over something like death research is that depth for search will take
        //a really long time with this type of a tree because the tree is really deep and we use Recursive functions with DFS.
        //It's going to go one by one going really, really down below.
        //And because solutions are rare, it's most likely going to just repeat that step over and over and over.
        // However, we will have some memory concerns with BFS


//If the tree is very wide (meaning it has a lot of nodes) its not a binary tree just has a ton of nodes underneath each parent
// DFS - because BFS will need too much memory as it has to keep track of all the nodes in the current level in a 'queue'


//If solutions are frequent but located deep in the tree:
// DFS - can find an answer quicker than with BFS


//Determining whether a path exists between two nodes:
// DFS - this is what it is built for

//Finding the shortest path:
// BFS