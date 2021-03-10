class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
     this.last = null;
    this.size = 0;
  }

  push(val){
      var newNode = new Node(val);
    if(this.first === null){
      this.first = newNode;
      this.last = newNode;
    }
  }
}
