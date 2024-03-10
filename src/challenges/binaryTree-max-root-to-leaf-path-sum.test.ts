import { NodeNumber } from "./binaryTree-a-constructor";
import {maxPathSum} from './binaryTree-max-root-to-leaf-path-sum';

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

    expect(maxPathSum(a)).toEqual(18);
});

test('npTest 01', () => {
    const a = new NodeNumber(5);
    const b = new NodeNumber(11);
    const c = new NodeNumber(54);
    const d = new NodeNumber(20);
    const e = new NodeNumber(15);
    const f = new NodeNumber(1);
    const g = new NodeNumber(3);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    e.left = f;
    e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

    expect(maxPathSum(a)).toEqual(59)
}); 

test('npTest 02', () => {
    const a = new NodeNumber(-1);
    const b = new NodeNumber(-6);
    const c = new NodeNumber(-5);
    const d = new NodeNumber(-3);
    const e = new NodeNumber(0);
    const f = new NodeNumber(-13);
    const g = new NodeNumber(-1);
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
// -3   0    -13
//     /       \
//    -1       -2

    expect(maxPathSum(a)).toEqual(-8);
});    

test('npTest 03', () => {
    const a = new NodeNumber(42);

//        42

    expect(maxPathSum(a)).toEqual(42);
});