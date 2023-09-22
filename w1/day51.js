/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
  /**
   * Constructs a new Node instance. Executed when the 'new' keyword is used.
   * @param {any} data The data to be added into this new instance of a Node.
   *    The data can be anything, just like an array can contain strings,
   *    numbers, objects, etc.
   * @returns {ListNode} A new Node instance is returned automatically without
   *    having to be explicitly written (implicit return).
   */
  constructor(data) {
    this.data = data;
    /**
     * This property is used to link this node to whichever node is next
     * in the list. By default, this new node is not linked to any other
     * nodes, so the setting / updating of this property will happen sometime
     * after this node is created.
     *
     * @type {ListNode|null}
     */
    this.next = null;
  }
}

/**
 * This class keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SinglyLinkedList {
  /**
   * Constructs a new instance of an empty linked list that inherits all the
   * methods.
   * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
   *    returned without having to explicitly write "return".
   */
  constructor() {
    /** @type {ListNode|null} */
    this.head = null;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    let newEnd = new ListNode(data);
    if (this.isEmpty()) {
      this.head = newEnd;
      return;
    }
    let runner = this.head;
    while (runner.next !== null) {
      runner = runner.next;
    }
    runner.next = newEnd;
    //Your code here
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @param {?ListNode} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackRecursive(data, runner = this.head) {
    if (this.head === null) {
      this.head = new ListNode(data);
      return;
    }
    if (runner.next === null) {
      runner.next = new ListNode(data);
      return;
    }
    return this.insertAtBackRecursive(data, runner.next);
  }

  /**
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackMany(vals) {
    for (const item of vals) {
      this.insertAtBack(item);
    }
    return this;
  }

  /**
   * Creates a new node with the given data and inserts that node at the front
   * of this list.
   * - Time: (?).
   * - Space: (?).
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtFront(data) {
    let newHead = new ListHead(data);
    newHead.next = this.head;
    this.head = newHead;
    return this;
  }

  /**
   * Removes the first node of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {any} The data from the removed node or null if list is empty.
   */
  removeHead() {
    if (this.isEmpty()) return null;
    let prevHead = this.head;
    this.head = prevHead.next;
    return prevHead.data;
  }

  /**
   * Removes the last node of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data from the node that was removed or null if no nodes.
   */
  removeBack() {
    if (this.isEmpty()) {
      return null;
    }

    // only one node, remove the head
    if (this.head.next === null) {
      return this.removeHead();
    }
    //more than one node, move to one before the end
    let runner = this.head;
    while (runner.next.next) {
      runner = runner.next;
    }

    const removedData = runner.next.data;
    runner.next = null;
    return removedData;
  }

  removeBackTwoPointer() {
    let oldNode = this.head;
    let currentNode = this.head.next;
    while (currentNode.next !== null) {
      oldNode = currentNode;
      currentNode = currentNode.next;
    }
    const removeData = currentNode.data;
    oldNode.next = null;
    console.log(removeData);
    console.log(this.head);
    return removeData;
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(val) {
    let runner = this.head;
    while (runner) {
      if (runner.data == val) return true;
      runner = runner.next;
    }
    return false;
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?ListNode} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
  containsRecursive(val, current = this.head) {
    //Your code ehre
    if (!current) return false;
    if (current.data == val) return true;
    return this.containsRecursive(val, current.next);
  }

  /**
   * Retrieves the data of the second to last node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
  secondToLast() {
    //If empty or only one node
    if (this.isEmpty() || !this.head.next) {
      return null;
    }

    let runner = this.head;

    //stop one before the end
    while (runner.next.next) {
      runner = runner.next;
    }
    return runner.data;
  }

  /**
   * Removes the node that has the matching given val as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeVal(val) {
    //if empty, nothing to remove
    if (this.isEmpty()) {
      return false;
    }
    //if the head is to be removed, call removeHead
    if (this.head.data === val) {
      this.removeHead();
      return true;
    }
    //otherwise, declare a runner
    let runner = this.head;

    //while there is a next node
    while (runner.next) {
      //see if the next node has our value
      if (runner.next.data === val) {
        // if it does "skip" over it and return true
        runner.next = runner.next.next;
        return true;
      }
      //otherwise, move on to next node
      runner = runner.next;
    }
    // never saw val, return false
    return false;
  }

  /**
   * Concatenates the nodes of a given list onto the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {SinglyLinkedList} addList An instance of a different list whose
   *    whose nodes will be added to the back of this list.
   * @returns {SinglyLinkedList} This list with the added nodes.
   */
  concat(addList) {
    let runner = this.head;

    if (runner === null) {
      this.head = addList.head;
    } else {
      while (runner.next) {
        runner = runner.next;
      }
      runner.next = addList.head;
    }
    return this;
  }

  /**
   * Finds the node with the smallest data and moves that node to the front of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {SinglyLinkedList} This list.
   */
  moveMinFront() {
    /*
    Alternatively, we could swap the data only in min node and head,
    but it's better to swap the nodes themselves in case anyone has variables
    pointing to these nodes already so that we don't unexpectedly change the
    the data in those nodes potentially causing unwanted side-effects.
    */
    if (this.isEmpty()) {
      return this;
    }

    let minNode = this.head;
    let runner = this.head;
    let prev = this.head;

    while (runner) {
      if (runner.data < minNode.data) {
        minNode = runner;
      }

      runner = runner.next;
    }
    // now that we know the min, if it is already the head, nothing needs to be done
    if (minNode === this.head) {
      return this;
    }

    runner = this.head;

    while (runner !== minNode) {
      prev = runner;
      runner = runner.next;
    }

    prev.next = minNode.next; // remove the minNode
    minNode.next = this.head;
    this.head = minNode;
    return this;
  }

  /**
   * Converts this list into an array containing the data of each node.
   * - Time: O(n) linear.
   * - Space: O(n).
   * @returns {Array<any>} An array of each node's data.
   */
  toArr() {
    const arr = [];
    let runner = this.head;

    while (runner) {
      arr.push(runner.data);
      runner = runner.next;
    }
    return arr;
  }

  print() {
    console.log(this.toArr());
  }
  /**
   * Reverses this list in-place without using any extra lists.
   * - Time: O(n) linear, n = list length.
   * - Space: O(1) constant.
   * @returns {SinglyLinkedList} This list.
   */
  reverse() {}
}

/*******************************************************************
Multiple test lists already constructed to test your methods on.
Below commented code depends on insertAtBack method to be completed,
after completing it, uncomment the code.
*/
const emptyList = new SinglyLinkedList();

const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new SinglyLinkedList().insertAtBackMany([
  -5, -10, 4, -3, 6, 1, -7, -2,
]);

const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
  1, 1, 1, 2, 3, 3, 4, 5, 5,
]);

sortedDupeList.print();
sortedDupeList.reverse();
sortedDupeList.print();
