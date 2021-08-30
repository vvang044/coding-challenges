/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {

    if ( p === null && q === null ) { //if both are null return true
        return true
    } else if ( p === null || q === null ){ //if either of them is null return false
        return false;
    }
     
     //if the values of p and q are equal
     //check the left subtree and right sub tree
     return ( p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right) )
 };