class StackNode {
  data: number;
  next: StackNode;

  constructor(data: number, next: StackNode = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  top: StackNode;

  constructor(data: number) {
    this.top = new StackNode(data);
  }

  public push(data: number): Stack {
    let newItem: StackNode = new StackNode(data);

    newItem.next = this.top;

    this.top = newItem;

    return this;
  }

  public pop(): number {
    if (this.isEmpty()) {
      throw new Error("Stack is empty.");
    }

    const node: StackNode = this.top;

    this.top = this.top.next;

    return node.data;
  }

  public isEmpty(): boolean {
    return this.top === null;
  }
}

const s: Stack = new Stack(10);

s.push(11);

console.log(s.pop());
console.log(s.pop());
