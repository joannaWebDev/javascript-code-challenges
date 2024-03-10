import { NodeNumber } from "./binaryTree-a-constructor";

export const maxPathSum = (root: NodeNumber): number => {
    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) return root.val;

    const maxChildPathSum = Math.max(maxPathSum(root.left!), maxPathSum(root.right!));

    return root.val + maxChildPathSum;

};