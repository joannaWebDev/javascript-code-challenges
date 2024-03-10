import { Node } from "./binaryTree-a-constructor";
import { breadthFirstValues } from './binaryTree-breadth-first-values';

test('npTest 00', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

    expect(breadthFirstValues(a)).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
});

test('npTest 001', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');
    const g = new Node('g');
    const h = new Node('h');

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

  expect(breadthFirstValues(a)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
});

test('npTest 02', () => {
    const a = new Node('a');

// a
    expect(breadthFirstValues(a)).toEqual(['a']);
});

test('npTest 03', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const x = new Node('x');

    a.right = b;
    b.left = c;
    c.left = x;
    c.right = d;
    d.right = e;

//      a
//       \
//        b
//       /
//      c
//    /  \
//   x    d
//         \
//          e

  expect(breadthFirstValues(a)).toEqual(['a', 'b', 'c', 'x', 'd', 'e'])
});

test('npTest 04', () => {
//    -> []
expect(breadthFirstValues(null)).toEqual([]);
});