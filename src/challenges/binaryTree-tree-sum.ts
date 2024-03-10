import { Node } from "./binaryTree-a-constructor";

// Recursive solution
export const treeSum = (root: Node | null): number => {
    if(root === null) return 0;

    if(root.val !== typeof 'number') throw new Error('Node value must be a number');

    return Number(root.val) + treeSum(root.left) + treeSum(root.right);
}

// Iterative solution
// export const treeSum = (root: Node | null): number => {
//     if(root === null) return 0;

//     const queue = [root];
//     let sum = 0;

//     while(queue.length > 0) {
//         const current = queue.shift();

//         if(current) sum += Number(current.val);
//         if(current?.left) queue.push(current.left);
//         if(current?.right) queue.push(current.right);
//     }

//     return sum;
// };