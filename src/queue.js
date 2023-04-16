const { ListNode } = require("../extensions/list-node.js");
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    if (this.first === null) {
      this.first = this.last = new ListNode(value);
    } else {
      this.last.next = new ListNode(value);
      this.last = this.last.next;
    }
  }

  dequeue() {
    let tmp = this.first;
    this.first = this.first.next;
    return tmp.value;
  }
}

module.exports = {
  Queue,
};
