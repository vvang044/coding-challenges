/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

Example 1
 Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2
Input: root = [1]
Output: ["1"]
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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    let result = [];

    function traverse(node, path){
        if(!node) return;
        path += node.val.toString();/*1, 1->2, 1->2->5,*/
        if(!node.left && !node.right) {
            result.push(path);
            return;
        }
        
        path += "->"
        if(node.left) {
            traverse(node.left, path);
        }
        if(node.right){
            traverse(node.right, path);
        }

    }
    
    traverse(root, "");
    return result;

    
};

console.log(binaryTreePaths([1,2,3,null,5]))

/*
Edge case if they give us an empty tree with no nodes then return 
Create an empty array which holds all the strings, which is path = []
Create a helper function called as traverse that takes two parameters
first is the node and the second is the current path
current path is equal to current path plus node val
if there is no node left or node right just push the current path to paths
otherwise
if there is node left
run the traverse function node.left and current path
and the path should have the "->"

if there is node right
run the traverse function node.right and current path
and the path should have the "->"

then call the traverse with root and empty string 
at the end dont forget to return the result


*/