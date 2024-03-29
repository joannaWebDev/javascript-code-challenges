import { Node } from "./binaryTree-a-constructor";
import {treeSum} from './binaryTree-tree-sum';

test('npTest 00', () => {
    const a = new Node(3);
    const b = new Node(11);
    const c = new Node(4);
    const d = new Node(4);
    const e = new Node(-2);
    const f = new Node(1);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

    expect(treeSum(a)).toEqual(21)
});

test('npTest 01', () => {
    const a = new Node(1);
    const b = new Node(6);
    const c = new Node(0);
    const d = new Node(3);
    const e = new Node(-6);
    const f = new Node(2);
    const g = new Node(2);
    const h = new Node(2);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

    expect(treeSum(a)).toEqual(10)
});

test('npTest 02', () => {
    expect(treeSum(null)).toEqual(0);
})