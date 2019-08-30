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
    // myArr = [currNode.data, ...myArr];
    myArr.push(currNode.data);
    currNode = currNode.next;
  }
  return myArr;
}
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
function main(){
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(is_palindrome("dad"));
  console.log(is_palindrome("A man, a plan, a canal: Panama"));
  console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
  // console.log(stackPeek(starTrek));
  console.log(stackDisplay(starTrek));
}

main();