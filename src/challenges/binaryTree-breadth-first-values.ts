import { Node } from "./binaryTree-a-constructor";

export const breadthFirstValues = (root: Node | null): string[] => {
    if(root === null) return [];

    const values = [];
    const queue = [root];

    while(queue.length > 0) {
        const current = queue.shift();

        if(current) values.push(current.val);
        if(current?.left) queue.push(current.left);
        if(current?.right) queue.push(current.right);
    }

    return values;
}