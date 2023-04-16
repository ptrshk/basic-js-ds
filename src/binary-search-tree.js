const { Node } = require("../extensions/list-tree.js");

class BinarySearchTree {
  constructor() {
    this.tree = null;
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.tree === null) {
      this.tree = newNode;
      this.rootNode = newNode;
      return;
    }
    this.insertNode(newNode);
  }

  insertNode(newNode, searchTree = this.tree) {
    if (searchTree.data > newNode.data) {
      searchTree.left === null
        ? (searchTree.left = newNode)
        : this.insertNode(newNode, searchTree.left);
    }
    if (searchTree.data <= newNode.data) {
      searchTree.right === null
        ? (searchTree.right = newNode)
        : this.insertNode(newNode, searchTree.right);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data, searchTree = this.tree) {
    if (searchTree === null) return null;
    if (searchTree.data > data) return this.find(data, searchTree.left);
    if (searchTree.data < data) return this.find(data, searchTree.right);
    return { data };
  }

  remove(data, searchTree = this.tree) {
    if (searchTree === null) return null;
    if (searchTree.data > data) {
      searchTree.left = this.remove(data, searchTree.left);
      return searchTree;
    }

    if (searchTree.data < data) {
      searchTree.right = this.remove(data, searchTree.right);
      return searchTree;
    }

    if (searchTree.right === null && searchTree.left === null) {
      searchTree = null;
      return searchTree;
    }

    if (searchTree.right === null) {
      searchTree = searchTree.left;
      return searchTree;
    }

    if (searchTree.left === null) {
      searchTree = searchTree.right;
      return searchTree;
    }

    let newRoot = this.min(searchTree.right);
    searchTree.data = newRoot;
    searchTree.right = this.remove(newRoot, searchTree.right);
    return searchTree;
  }

  min(root = this.tree) {
    return root.left === null ? root.data : this.min(root.left);
  }

  max(root = this.tree) {
    return root.right === null ? root.data : this.max(root.right);
  }
}

module.exports = {
  BinarySearchTree,
};
