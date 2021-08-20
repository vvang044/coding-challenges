/* Flip Equivalent Binary Trees
https://leetcode.com/problems/flip-equivalent-binary-trees/

For a binary tree T, we can define a flip operation as follows: choose any node,
and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can 
make X equal to Y after some number of flip operations.

Given the roots of two binary trees root1 and root2, return true if the two 
trees are flip equivelent or false otherwise.

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var flipEquiv = function(root1, root2) {
    var dfs = function ( node1, node2){
        if(!node1 && !node2){
            return true;
        } else if ( !node1 || !node2 ){
            return false
        } else if (node1.val !== node2.val){
            return false
        }

        return (dfs(node1.left, node2.left) && dfs(node1.right, node2.right)) ||
                (dfs(node1.left, node2.right) && dfs(node1.right, node2.left));  
    }

   return dfs(root1, root2)
};