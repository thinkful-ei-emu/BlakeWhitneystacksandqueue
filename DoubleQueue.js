// ===== 6. Create a queue using Singly linked list =====
class _Node {
  constructor(value, previous = null) {
    this.value = value;
    this.next = null;
    this.previous = previous;
  }
}

class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data, this.last);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    this.first.next.previous = this.first;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function queuePeek(queue) {
  return queue.first;
}

function queueIsEmpty(queue) {
  if (queue.first === null) {
    return true;
  }
  return false;
}

function display(queue) {
  if (queue.first === null) {
    return [];
  }
  let display = [];
  let currNode = queue.first;
  while (currNode) {
    display.push(currNode.value);
    currNode = currNode.next;
  }
  return display;
}

let starTrekQ = new DoubleQueue;
function main() {
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  console.log(queuePeek(starTrekQ));
  console.log(display(starTrekQ));
}

main();