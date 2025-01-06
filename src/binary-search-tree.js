const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = toInsertANewData(this.head, data)

    function toInsertANewData(node, data) {
      if (!node) return new Node(data);

      if (node.data < data) {
        node.right = toInsertANewData(node.right, data)
      }

      if (node.data > data) {
        node.left = toInsertANewData(node.left, data)
      }

      return node;
    }
  }

  has(data) {
    if (!data) {
      return;
    }

    let current = this.head
    while(current) {
      if (current.data === data) {
        return true;
      }
      if (current.data < data) {
        current = current.right;
      }
      if (current.data > data) {
        current = current.left;
      }
    }
    return false;
  }


  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let current = this.head;

    while (current.left) {
      current = current.left;
    }
    return current.data
  }

  max() {
    let current = this.head;

    while (current.right) {
      current = current.right;
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};