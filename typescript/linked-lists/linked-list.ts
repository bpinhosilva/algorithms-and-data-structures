class ListNode {
  next: ListNode;
  data: number;

  constructor(data: number, next: ListNode = null) {
    this.data = data;
    this.next = next;
  }

  public append(data: number): ListNode {
    let newNode: ListNode = new ListNode(data);
    let aux: ListNode = this;

    while (aux.next != null) {
      aux = aux.next;
    }

    aux.next = newNode;

    return this;
  }

  public print(): void {
    let aux: ListNode = this;

    while (aux) {
      console.log(aux.data);
      aux = aux.next;
    }
  }

  /**
   * T: O(n)
   * S: O(1)
   * @param n
   * @returns
   */
  public reverse(n: ListNode = this): ListNode {
    if (n === null || n.next === null) {
      return n;
    }

    // The end node is now the new head
    let newHead: ListNode = this.reverse(n.next);

    // Invert the link between nodes
    n.next.next = n;

    // Current node has to point to null once it's the new end
    n.next = null;

    return newHead;
  }

  public reverseIteratively(n: ListNode = this): ListNode {
    let current: ListNode = n;
    let prev: ListNode | null = null;

    while (current) {
      let temp: ListNode | null = current.next;

      current.next = prev;
      prev = current;
      current = temp;
    }

    return prev;
  }
}

let n: ListNode = new ListNode(1).append(2).append(3);

n.print();

n.reverseIteratively().print();
