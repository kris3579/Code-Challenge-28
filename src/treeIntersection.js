'use strict';

module.exports = function treeIntersection(treeA, treeB) {
  const treeAMap = new Map();
  const compareMap = new Map()(function traverseAndSetMap(root) {
    if (root === null) {
      return undefined;
    }
    treeAMap.set(root.value, true);
    traverseAndSetMap(root.left);
    traverseAndSetMap(root.right);
    return undefined;
  }(treeA.root));

  (function traverseAndCompareMap(root) {
    if (root === null) {
      return undefined;
    }
    if (treeAMap.get(root.value) && !compareMap(root.value)) {
      compareMap.set(root.value, true);
    }
    traverseAndCompareMap(root.left);
    traverseAndCompareMap(root.right);
    return undefined;
  }(treeB.root));

  return compareMap;
};
