// goal is to have 9 as root node, 4 and 20 as its children, and 4 has 1, 6 as its children, and 20 has 15 and 170 as its grandchildren

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
    insert(value) {
        // create a new node
        // if there is no root, make this node the root
        // if there is a root, traverse the tree to find the correct spot for this node
        // if the value is less than the root, go left, if greater go right
        // if the value is equal to the root, do nothing

        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (value > currentNode.value) {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    break;
                }
            }
        }        
        
        if (value < this.root.value) {
            if (this.root.left === null) {
                this.root.left = node;
            } else {
                this.root.left.insert(value);
            }
            return this;
        } else if (value > this.root.value) {
            if (this.root.right === null) {
                this.root.right = node;
            } else {
                this.root.right.insert(value);
            }
            return this;
        } else {
            return this;
        }

    }
    lookup(value) {
        // simply returns the node we are looking for, if doesnt find it simply return null or false
        if (this.root === null) {
            return null;
        } else {
            return this.root.lookup(value);
        }
    }
    // remove
}

const tree = new BinarySearchTree();
console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(6));
console.log(tree.insert(20));
console.log(tree.insert(170));
console.log(tree.insert(15));
console.log(tree.insert(1));
JSON.stringify(traverse(tree.root));

// ignore below for now...using recursion and we havent covered this yet

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}