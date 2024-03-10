export class Node {
    val: string | number;
    left: Node | null;
    right: Node | null;
  
    constructor(val: string | number) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

export class NodeNumber {
  val:  number;
  left: NodeNumber | null;
  right: NodeNumber | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}



