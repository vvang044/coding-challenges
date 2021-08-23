/* Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder 
traversal of its nodes' values.

 Example 1
                1
                  \ 
                    2
                  /
                3  
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2
Input: rool = [ ]
Output: [ ]

Example 3
Input: rool = [1]
Output : [1]
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

//In-order: left, self, right
var inorderTraversal = function(root) {
    const stack = []
    const result = []
    
    let node = root
    while (node !== null || stack.length !== 0) {
        if (node !== null) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            result.push(node.val)
            node = node.right
        }
    }
    
    return result
    
};