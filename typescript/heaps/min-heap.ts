export class MinHeap {
  private capacity: number;
  private size: number;
  private items: number[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;

    this.items = new Array(this.capacity);
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.size;
  }

  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.size;
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  private leftChild(index: number): number {
    return this.items[this.getLeftChildIndex(index)];
  }

  private rightChild(index: number): number {
    return this.items[this.getRightChildIndex(index)];
  }

  private parent(index: number): number {
    return this.items[this.getParentIndex(index)];
  }

  private swap(indexA: number, indexB): void {
    let temp: number = this.items[indexA];
    this.items[indexA] = this.items[indexB];
    this.items[indexB] = temp;
  }

  private ensureExtraCapacity(): void {
    if (this.size === this.capacity) {
      this.items = Array.from(this.items).concat(new Array(this.capacity));
      this.capacity *= 2;
    }
  }

  public peek(): number {
    if (this.size === 0) {
      throw new Error("Array is empty");
    }

    return this.items[0];
  }

  private heapifyUp(): void {
    let index: number = this.size - 1;

    while (this.hasParent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  private heapifyDown(): void {
    let index: number = 0;

    while (this.hasLeftChild(index)) {
      let smallerChildIndex: number = this.getLeftChildIndex(index);

      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.items[index] < this.items[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      }
    }
  }

  public poll(): number {
    if (this.size === 0) {
      throw new Error("Array is empty");
    }

    let item: number = this.items[0];

    this.items[0] = this.items[this.size - 1];

    this.size--;

    this.heapifyDown();

    return item;
  }

  public add(item: number): void {
    this.ensureExtraCapacity();

    this.items[this.size] = item;
    this.size++;
    this.heapifyUp();
  }
}

const h: MinHeap = new MinHeap(5);

h.add(100);
h.add(5);
h.add(20);
h.add(1);

console.log(h);
