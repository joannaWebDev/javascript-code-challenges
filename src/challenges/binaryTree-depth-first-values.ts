import { Node } from "./binaryTree-a-constructor";
  
export const depthFirstValues = (root: Node | null): string[] => {
    const result: string[] = [];
  
    const traverse = (node: Node | null) => {
      if (node) {
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }
    };
  
    traverse(root);
  
    return result;
};

//Iterative solution
// const depthFirstValues = (root: Node | null): string[] => {
//    if(root === null) return [];

//    const result = [];
//    const stack = [root];

//    while(stack.length > 0){
//     const current = stack.pop();
//     result.push(current.val);

//     if(current?.right) stack.push(current.right);
    

//    }
  
//     return result;
// };
   
  
  