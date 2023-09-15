/*
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
// START HERE What does each DLLNode need?
class DLLNode {
  constructor(data) {
    //your code here
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  //HERE SECOND
  // we need a head and a tail
  constructor() {
    //Your code here
    // TODO: implement the constructor.
    this.head = null;
    this.tail = null;
  }

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {
    //Your code here
    let newHead = new DLLNode(data);
    if (this.isEmpty()) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    return this;
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(data) {
    let newTail = new DLLNode(data);
    if (this.isEmpty()) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      newTail.prev = this.tail;
      this.tail = newTail;
    }
    return this;
  }

  // EXTRA
  /**
   * Removes the middle node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node or null if no true middle exists
   */
  removeMiddleNode() {
    //Your code here
    // when there is only 1 node, it is the middle, remove it.
    if (!this.isEmpty() && this.head === this.tail) {
      const removedData = this.head.data;
      this.head = null;
      this.tail = null;
      return removedData;
    }

    let forwardRunner = this.head;
    let backwardsRunner = this.tail;

    while (forwardRunner && backwardsRunner) {
      if (forwardRunner === backwardsRunner) {
        const midNode = forwardRunner;
        midNode.prev.next = midNode.next;
        midNode.next.prev = midNode.prev;
        return midNode.data;
      }
      // runners passed each other without stopping on the same node, even length, we can exit early
      if (forwardRunner.prev === backwardsRunner) {
        return null;
      }
      forwardRunner = forwardRunner.next;
      backwardsRunner = backwardsRunner.prev;
    }
    return null;
  }

  removeMiddleNode2() {
    if (this.isEmpty()) {
      return null;
    }
    let runner1 = this.head;
    let runner2 = this.tail;
    while (runner1 || runner2) {
      if (runner1 == runner2) {
        let result = runner1.data;
        runner1.prev.next = runner1.next;
        runner1.next.prev = runner1.prev;
        return result;
      }
      runner1 = runner1.next;
      runner2 = runner2.prev;
    }
    return null;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Inserts a new node with the given newVal after the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
  insertAfter(targetVal, newVal) {
    if (this.isEmpty()) {
      return false;
    }

    let runner = this.head;

    // runner && is in case runner becomes null so we don't check null.data
    while (runner && runner.data !== targetVal) {
      runner = runner.next;
    }

    if (runner === null) {
      return false;
    }

    const newNode = new DLLNode(newVal);
    newNode.prev = runner;
    newNode.next = runner.next;

    if (runner === this.tail) {
      this.tail = newNode;
    } else {
      // if runner was tail then next would be null.
      runner.next.prev = newNode;
    }

    runner.next = newNode;
    return true;
  }

  insertAfter2(targetVal, newVal) {
    if (this.isEmpty()) {
      return false;
    } else {
      let runner = this.head;
      let newNode = new DLLNode(newVal);
      if (this.tail.data == targetVal) {
        this.insertAtBack(newVal);
        return true;
      }
      while (runner.next != null) {
        if (runner.data == targetVal) {
          newNode.next = runner.next;
          runner.next.prev = newNode;
          runner.next = newNode;
          newNode.prev = runner;
          return true;
        }
        runner = runner.next;
      }
      return false;
    }
  }

  insertAfter3(targetVal, newVal) {
    if (this.isEmpty()) {
      return false;
    }
    let newNode = new DLLNode(newVal);
    let runner = this.head;
    while (runner != null) {
      if (runner.data == targetVal) {
        newNode.prev = runner;
        newNode.next = runner.next;

        if (runner == this.tail) {
          this.tail = newNode;
        } else {
          runner.next.prev = newNode;
        }
        runner.next = newNode;
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  /**
   * Inserts a new node with the given newVal before the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
  insertBefore(targetVal, newVal) {
    if (this.isEmpty()) {
      return false;
    }

    let runner = this.head;

    // This was written with a different structure than insertAfter to
    // for comparison purposes but the logic is almost the same.
    while (runner) {
      if (runner.data === targetVal) {
        const newNode = new DLLNode(newVal);
        newNode.next = runner;
        newNode.prev = runner.prev;

        if (runner === this.head) {
          this.head = newNode;
        } else {
          // if runner was head then prev would be null.
          runner.prev.next = newNode;
        }

        runner.prev = newNode;
        return true;
      }

      runner = runner.next;
    }
    return false;
  }

  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }
}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
  -5, -10, 4, -3, 6, 1, -7, -2,
]);

console.log(unorderedList.toArray());
unorderedList.insertBefore(-7, 100);
console.log(unorderedList.toArray());
unorderedList.insertAfter(6, 200);
console.log(unorderedList.toArray());
