const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }

    add(data) {
        var newNode = new Node(data);

        if (this.rootNode === null) {
            this.rootNode = newNode;
        } else {
            this.insertNode(this.rootNode, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {

            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) { node.right = newNode; } else {
                this.insertNode(node.right, newNode);
            }

        }
    }

    has(data) {
        return this.findNode(this.rootNode, data) !== null;
    }

    find(data) {
        return this.findNode(this.rootNode, data);
    }

    findNode(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.findNode(node.left, data);
        } else if (data > node.data) {
            return this.findNode(node.right, data);
        } else { return node; }
    }

    remove( /* data */ ) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    max() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

module.exports = {
    BinarySearchTree
};