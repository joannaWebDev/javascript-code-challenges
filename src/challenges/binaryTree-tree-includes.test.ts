import { Node } from "./binaryTree-a-constructor";
import {treeIncludes} from './binaryTree-tree-includes';

test('npTest 00', () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");

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

    expect(treeIncludes(a, "e")).toEqual(true);
})

test('npTest 01', () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");

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

    expect(treeIncludes(a, "a")).toEqual(true);
});

test('npTest 02', () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");

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

    expect(treeIncludes(a, "n")).toEqual(false);
});

test('npTest 03', () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");
    const h = new Node("h");

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

  expect(treeIncludes(a, "f")).toEqual(true);
});

test('npTest 04', () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");
    const h = new Node("h");

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

 expect(treeIncludes(a, "p")).toEqual(false);
});