/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     *
     * @type {BSTNode|null}
     */
    this.left = null;
    /** @type {BSTNode|null} */
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     *
     * @type {BSTNode|null}
     */
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    return this.root == null;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if (current === null) return null;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    if (this.isEmpty()) return null;
    if (current.left == null) {
      return current.data;
    }
    return this.minRecursive(current.left);
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    if (current === null) return null;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    if (this.isEmpty()) return null;
    if (current.right == null) {
      return current.data;
    }
    return this.minRecursive(current.right);
  }

  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
  insert(newVal) {
    //create new node
    const newNode = new BSTNode(newVal);

    // if empty, new node is now our root
    if (this.isEmpty()) {
      this.root = newNode;
    }

    //otherwise, runner starts at root
    let runner = this.root;

    //loop until we return
    while (true) {
      //if newNode is larger, peek right
      if (newNode.data > runner.data) {
        //if right is empty, insert node
        if (runner.right == null) {
          runner.right = newNode;
          return this;
        }
        //otherwise, traverse right
        runner = runner.right;
      } else {
        //node is less than or equal, go left
        //if left is empty, insert node
        if (runner.left == null) {
          runner.left = newNode;
          return this;
        }
        //otherwise, traverse left
        runner = runner.left;
      }
    }
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */
  insertRecursive(newVal, curr = this.root) {
    //if BST is empty, new node is root and done
    if (this.isEmpty()) {
      this.root = new BSTNode(newVal);
      return this;
    }
    //if new val is greater than current data, look right
    if (newVal > curr.data) {
      //if right is null, insert our node
      if (curr.right === null) {
        curr.right = new BSTNode(newVal);
        return this;
      }
      //if not not null, traverse right
      return this.insertRecursive(newVal, curr.right);
    }
    if (curr.left === null) {
      //if left is null, insert our node
      curr.left = new BSTNode(newVal);
      return this;
    }
    // otherwise, traverse left
    return this.insertRecursive(newVal, curr.left);
  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree
        root
        10
      /   \
    5     15
  / \    / \
2   6  13
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

console.log("*****************************");
emptyTree.print();
console.log("*****************************");
twoLevelTree.print();
console.log("*****************************");
threeLevelTree.insertRecursive(12);
threeLevelTree.print();
