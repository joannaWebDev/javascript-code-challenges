import { Node } from "./binaryTree-a-constructor";
import { depthFirstValues } from './binaryTree-depth-first-values';

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

  expect(depthFirstValues).toEqual(['a', 'b', 'd', 'e', 'c', 'f']);

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
});

test('npTest 001', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');
    const g = new Node('g');
  
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
  
    expect(depthFirstValues).toEqual(['a', 'b', 'd', 'e', 'g', 'c', 'f']);

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g  
  });
  
  test('npTest 02', () => {
    const a = new Node('a');

    expect(depthFirstValues).toEqual(['a']);
  //      a
  });
  
  test('npTest 03', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
  
    a.right = b;
    b.left = c;
    c.right = d;
    d.right = e;
  
    expect(depthFirstValues).toEqual(['a', 'b', 'c', 'd', 'e']);

//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e
  });

test('Test 04', () => {
  expect(depthFirstValues).toEqual([]);
//    -> []
});
