import { NodeNumber } from "./binaryTree-a-constructor";

// Recursive solution
export const treeMinValue = (root: NodeNumber): number => {
    if(root === null) return Infinity;

    const leftMin = treeMinValue(root.left!);
    const rightMin = treeMinValue(root.right!);

    return Math.min(root.val, leftMin, rightMin);
};


// Iterative solution
// export const treeMinValue = (root: NodeNumber): number => {
//    let smallest = Infinity;

//    const stack = [root];

//     while (stack.length) {
//         const current = stack.pop()!;
    
//        if(current?.val < smallest) smallest = current.val;

//        if(current.left !== null) stack.push(current.left);
//        if(current.right !== null) stack.push(current.right);    
//     }

//     return smallest;
// };