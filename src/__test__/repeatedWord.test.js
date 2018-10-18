'use strict';

const TreeIntersection = require('../treeIntersection');
const Node = require('../lib/Node');
const Tree = require('../lib/Tree');

const testTreeA = new Tree(10);
testTreeA.root.left(9);
testTreeA.root.right(11);
testTreeA.root.left.right(8);
testTreeA.root.right.left(12);

const testTreeB = new Tree(5);
testTreeB.root.left(6);
testTreeB.root.right(7);
testTreeB.root.right.right(8);
testTreeB.root.right.right.right(10);

const testTreeC = new Tree(1);
testTreeC.root.left(2);
testTreeC.root.right(3);
testTreeC.root.left.left(4);

const testTreeD = new Tree(10);
testTreeD.root.right(10);
testTreeD.root.left(9);

const emptyTree = new Tree();

describe('repeatedWord.js', () => {
  test('Successfully returned common values, 8 and 10', () => {
    const result = TreeIntersection(testTreeA, testTreeB);
    const resultMap = new Map();
    resultMap.set(8, true).set(10, true);
    expect(result).toEqual(resultMap);
  });
  test('No common values results in an empty map', () => {
    const result = TreeIntersection(testTreeA, testTreeC);
    const resultMap = new Map();
    expect(result).toEqual(resultMap);
  });
  test('No duplicate values in the result array', () => {
    const result = TreeIntersection(testTreeA, testTreeD);
    const resultMap = new Map();
    resultMap.set(10, true).set(9, true);
    expect(result).toEqual(resultMap);
  });
});
