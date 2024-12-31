const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.obj = {};
    this.length = 0;
  }
  push(element) {
    this.length++;
    this.obj[this.length] = element
  }

  pop() {
    let deleted = this.obj[this.length]
    delete this.obj[this.length]
    this.length--
    return deleted
  }

  peek() {
    return this.obj[this.length] ? this.obj[this.length] : undefined;
  }
}

module.exports = {
  Stack
};
