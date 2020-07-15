// Return the kTh to last element of a linked list

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      let node = new Node(data);
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  kThToLast(number) {
    let fast = this.head;
    let slow = this.head;
    let fastCount = 1;
    let slowCount = 1;
    while (fast.next) {
      fast = fast.next;
      fastCount++;
    }
    slowCount = fastCount - number;
    while (slowCount > 1) {
      slow = slow.next;
      slowCount--;
    }
    return slow;
  }
}

const numbers = new LinkedList;
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
console.log(numbers.kThToLast(2));
