class QueueNode {
  data: number;
  next: QueueNode;

  constructor(data: number, next: QueueNode = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  first: QueueNode;
  last: QueueNode;

  constructor(data: number) {
    this.first = this.last = new QueueNode(data);
  }

  public enqueue(data: number): Queue {
    let newItem: QueueNode = new QueueNode(data);

    if (this.last !== null) {
      this.last.next = newItem;
    }

    this.last = newItem;

    if (this.first === null) {
      this.first = this.last;
    }

    return this;
  }

  public dequeue(): number {
    if (this.isEmpty()) {
      throw new Error("Queue is empty.");
    }

    let node: QueueNode = this.first;

    this.first = this.first.next;

    if (this.first === null) {
      this.last = null;
    }

    return node.data;
  }

  public isEmpty(): boolean {
    return this.first === null && this.last === null;
  }
}

const q: Queue = new Queue(10);

q.enqueue(11).enqueue(12);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
