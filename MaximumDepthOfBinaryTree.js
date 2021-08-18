/*Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along 
the longest path from the root node down to the farthest leaf node.

Example 1
                        3 
                      /   \
                    9       20
                          /    \
                        15     7       
                        
Input: root = [ 3, 9, 20, null, null, 15, 7]
Ouput: 3

*/



 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
//  */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {

    return maxDepthHandler( root, 1)
    
};

let maxDepthHandler = (root, num) => {
    if( root == null){
        return 0
    }

    if ( root.right == null && root.left == null ){
        return num
    }

    if( root.right && root.left ){
        return Math.max( maxDepthHandler(root.right, num+1), maxDepthHandler(root.left, num + 1 ) )
    } else if ( root.right != null ){
        return maxDepthHandler( root.right, num + 1 )
    } else {
        return maxDepthHandler(root.left, num + 1) 
    }
}

console.log(maxDepth( [1,null,2] ))