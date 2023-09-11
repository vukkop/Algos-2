/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 * Visualizer: https://www.cs.usfca.edu/~galles/visualization/Heap.html
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }

  //Helper methods for determining child / parent relationship of indices
  /**
   * @param {number} i
   */
  idxOfParent(i) {
    return Math.floor(i / 2);
  }

  /**
   * @param {number} i
   */
  idxOfLeftChild(i) {
    return i * 2;
  }

  /**
   * @param {number} i
   */
  idxOfRightChild(i) {
    return i * 2 + 1;
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    //Your code here
    return this.heap[1] ? this.heap[1] : null;
  }

  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than
   *    it's parent.
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  insert(num) {
    //add item to heap
    this.heap.push(num);

    //get index of new item
    let insertedIdx = this.heap.length - 1;
    //get index of new item's parent
    let parentIdx = this.idxOfParent(insertedIdx);
    //while value at insertion point less than its parent, swap and recalculate parent
    while (this.heap[insertedIdx] < this.heap[parentIdx]) {
      let temp = this.heap[insertedIdx];
      this.heap[insertedIdx] = this.heap[parentIdx];
      this.heap[parentIdx] = temp;
      insertedIdx = parentIdx;
      parentIdx = this.idxOfParent(insertedIdx);
    }
    return this;
  }
  insertGroup2(num) {
    this.heap.push(num);
    let placeholder = this.heap.length - 1;
    while (placeholder > 1) {
      // storing parent data in a variable
      let parentIndex = this.idxOfParent(placeholder);

      if (this.heap[placeholder] < this.heap[parentIndex]) {
        // our new variable is swapping with the parent
        // this is the same as destructuring
        [this.heap[placeholder], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[placeholder],
        ];
        placeholder = parentIndex;
      } else {
        break;
      }
    }
  }

  /**
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }
}

//test code

let testHeap = new MinHeap();

testHeap.insert(5);
testHeap.insert(4);
testHeap.insert(3);
testHeap.insert(2);
testHeap.insert(1);
testHeap.printHorizontalTree();
console.log(testHeap.top());
