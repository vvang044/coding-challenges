/*
Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values.
Example 1
Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2
Input: root = []
Outpout: []

Example 3
Input: root = [1]
Output: [1]

Example 4
Input: root = [1,2]
Output: [1,2]

Pre-Order Traversal : self, left, right
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
 * @return {number[]}
 */

let preorderTraversal(root){

    let result = []
    dfs(root);
    
    function dfs(root){
        if(root != null){
            result.push(root.val);
            dfs(root.left);
            dfs(root.right);
        }
    }

    return result;

}