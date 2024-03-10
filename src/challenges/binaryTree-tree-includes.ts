import { Node } from "./binaryTree-a-constructor";


// Recursive solution
 export const treeIncludes = (root: Node | null, target: string): boolean => {
    if(root === null) return false;
    if(root.val === target) return true;

    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
 }

// Iterative solution
// export const treeIncludes = (root: Node | null, target: string): boolean => {
//     const queue = [root];

//     while(queue.length > 0) {
//         const current = queue.shift();
        
//         if(current?.val === target) return true;
//         if(current?.left) queue.push(current.left);
//         if(current?.right) queue.push(current.right);
        

//     }

//     return false;
// }