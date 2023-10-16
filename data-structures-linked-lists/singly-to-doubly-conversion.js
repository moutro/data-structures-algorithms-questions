// This is a structure to base how we create a linked list.

// 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

// a way to DRY not repeat newNode code all the time in each variation of the method.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// add a method remove() to the linked list that deletes a node to the specified index.

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // const newNode = new Node(value); // DRY
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    newNode.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null,
      prev: null,
    }
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    follower.prev = newNode;
    newNode.next = follower;
    this.length++;
    console.log(this);
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index){
    //Check for proper parameters;
    // if the index is a positive number, whether the index is higher than the length
    const nodeToRemove = this.traverseToIndex(index); 
    const leader = nodeToRemove.prev;
    const follower = nodeToRemove.next;
    leader.next = follower;
    if(follower) {
        follower.prev = leader;
    }
    this.length--;
    return this.printList();
  }

// copilot solution:
//   reverse() {
//     // check params
//     if (!this.head.next) {
//       return this.head;
//     }
//     let currentNode = this.head;
//     let prevNode = null;
//     let nextNode = null;
//     while(currentNode!== null) {
//       nextNode = currentNode.next;
//       currentNode.next = prevNode;
//       currentNode.prev = nextNode;
//       prevNode = currentNode;
//       currentNode = nextNode;
//     }
//     this.head = prevNode;
//     return this.printList();
//   }
// }

// ztm solution:
reverse() {
    if (!this.head) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
}
}

let myLinkedList = new DoublyLinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(1, 99));
// console.log(myLinkedList.insert(20, 88));
// console.log(myLinkedList.printList());
console.log(myLinkedList.remove(2));
console.log(myLinkedList.reverse());



