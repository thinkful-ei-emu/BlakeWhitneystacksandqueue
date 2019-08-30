// ===== Create starTrek =====

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

let starTrek = new Stack;

// ===== 2. Useful methods for a stack =====
function stackPeek(stack){
  return stack.top;
}

function stackIsEmpty(stack){
  if (!stack.top){
    return true;
  }
  return false;
}

function stackDisplay(stack){
  if (!stack.top){
    return [];
  }
  let myArr = [];
  let currNode = stack.top;
  while(currNode !== null){
    // myArr = [currNode.data, ...myArr]; //--> Use for printing list in correct order
    myArr.push(currNode.data); //--> Use for palindrome exercise
    currNode = currNode.next;
  }
  return myArr;
}

// ===== 3. Check for palindromes using a stack =====
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let myStack = new Stack;
  for(let i =0; i<s.length; i++){
    myStack.push(s.charAt(i));
  }
  for(let i = 0; i<s.length ; i++){
    if (s.charAt(i) !== myStack.pop()){
      return false;
    }
  }
  return true;
}

// ===== 4. Matching Parentheses in an expression =====
function stackMatchingParentheses(data){
  // Create an empty stack
  let parenthesesComparison = new Stack;
  // Move through the data given
  for (let i = 0; i < data.length; i++) {
    // If char = "(", push to stack
    if (data.charAt(i) === '(') {
      parenthesesComparison.push(data.charAt(i));
    } else
    // if char = ")", pop from stack
    if (data.charAt(i) === ')') {
      parenthesesComparison.pop();
    }
  }
  if (!parenthesesComparison.top) {
    return true;
  } else
    return false;
  
}

// ===== Stack calls =====
function main(){
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // starTrek.pop();
  // starTrek.pop();
  // console.log(is_palindrome('dad'));
  // console.log(is_palindrome('A man, a plan, a canal: Panama'));
  // console.log(is_palindrome('1001'));
  // console.log(is_palindrome('Tauhida'));
  // console.log(stackPeek(starTrek));
  console.log(stackMatchingParentheses('(thisisfun)and(thisiscool)')); //true
  console.log(stackMatchingParentheses('(thisisfun)and(thisiscool')); //false

  console.log(stackDisplay(starTrek));
}

main();