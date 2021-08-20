/*
Given the root of a binary tree, invert the tree, and return its root.
            4                               4
          /   \                         /     \
        2       7                     7        2
      /  \    /   \                 /  \     /   \
    1    3   6     9              9     6   3     1  
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 *
 */

 function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
    }
    
 var invertTree = function(root) {
    if(!root) return root
    
    var left = invertTree(root.left)
    var right = invertTree(root.right)
    root.left = left === undefined ? null : right;
    root.right = right === undefined ? null : left;
    return root
};

console.log(invertTree([4,2,7,1,3,6,9]))