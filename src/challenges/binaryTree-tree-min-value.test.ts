import { NodeNumber } from "./binaryTree-a-constructor";
import {treeMinValue} from './binaryTree-tree-min-value';

test('npTest 00', () => {
    const a = new NodeNumber(3);
    const b = new NodeNumber(11);
    const c = new NodeNumber(4);
    const d = new NodeNumber(4);
    const e = new NodeNumber(-2);
    const f = new NodeNumber(1);

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

    expect(treeMinValue(a)).toEqual(-2);
});

test('npTest 01', () => {
    const a = new NodeNumber(5);
    const b = new NodeNumber(11);
    const c = new NodeNumber(3);
    const d = new NodeNumber(4);
    const e = new NodeNumber(14);
    const f = new NodeNumber(12);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

    expect(treeMinValue(a)).toEqual(3);
});

test('npTest 02', () => {
    const a = new NodeNumber(-1);
    const b = new NodeNumber(-6);
    const c = new NodeNumber(-5);
    const d = new NodeNumber(-3);
    const e = new NodeNumber(-4);
    const f = new NodeNumber(-13);
    const g = new NodeNumber(-2);
    const h = new NodeNumber(-2);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     /       \
//    -2       -2

    expect(treeMinValue(a)).toEqual(-13);
}); 

test('npTest 03', () => {
    const a = new NodeNumber(42);

//        42

    expect(treeMinValue(a)).toEqual(42);
});