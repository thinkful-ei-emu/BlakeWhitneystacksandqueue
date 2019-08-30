// ===== 6. Create a queue using Singly linked list =====
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

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

let starTrekQ = new Queue;
function main() {
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  // starTrekQ.dequeue();
  // starTrekQ.dequeue();
  // console.log(queuePeek(starTrekQ));
  // console.log(display(starTrekQ));
}

main();

class SquareDancing {
  constructor() {
    // Male Queue
    this.maleQueue = new Queue;
    // Female Queue
    this.femaleQueue = new Queue;
  }
  
  addToQueue(gender, name) {
    if (gender === 'F') {
      this.femaleQueue.enqueue(name);
    } else {
      this.maleQueue.enqueue(name);
    }
  }

  matchPartners() {
    while (this.maleQueue.first && this.femaleQueue.first) {
      console.log(`Female dancer is ${this.femaleQueue.dequeue()}, and the male dancer is ${this.maleQueue.dequeue()}`);
    }
    if (this.maleQueue.first) {
      let i = 0;
      let currNode = this.maleQueue.first;

      while (currNode) {
        i++;
        currNode = currNode.next;
      }
      console.log(`There are ${i} male dancers waiting to dance`);
    }
    if (this.femaleQueue.first) {
      let i = 0;
      let currNode = this.femaleQueue.first;

      while (currNode) {
        i++;
        currNode = currNode.next;
      }
      console.log(`There are ${i} female dancers waiting to dance`);
    }
  }
}

let squareDancers = new SquareDancing;

function main2() {
  squareDancers.addToQueue('F', 'Jane');
  squareDancers.addToQueue('M', 'Frank');
  squareDancers.addToQueue('M', 'John');
  squareDancers.addToQueue('M', 'Sherlock');
  squareDancers.addToQueue('F', 'Madonna');
  squareDancers.addToQueue('M', 'David');
  squareDancers.addToQueue('M', 'Christopher');
  squareDancers.addToQueue('F', 'Beyonce');
  squareDancers.matchPartners();
}

main2();