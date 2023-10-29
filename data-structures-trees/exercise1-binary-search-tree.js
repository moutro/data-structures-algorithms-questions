// goal is to have 9 as root node, 4 and 20 as its children, and 4 has 1, 6 as its children, and 20 has 15 and 170 as its grandchildren

//             9
//           /   \
//          4     20
//         / \   / \
//        1   6 15  170

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
        // create a new node
        // if there is no root, make this node the root
        // if there is a root, traverse the tree to find the correct spot for this node
        // if the value is less than the root, go left, if greater go right
        // if the value is equal to the root, do nothing

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // go left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // go right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        // simply returns the node we are looking for, if doesnt find it simply return null or false
        // we want to check if a node exists in the tree

        if (this.root === null) {
            return false;
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                } else if (value > currentNode.value) {
                    currentNode = currentNode.right;
                } else {
                    return currentNode;
                }
            }
            return false;
        }
    }
    // remove
    
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(171));
// console.log(JSON.stringify(traverse(tree.root)));

// ignore below for now...using recursion and we havent covered this yet

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}