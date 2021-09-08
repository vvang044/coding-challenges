/*
Given the 'root' of a binary tree, 
check whether it is a mirror of itself(i.e, symmetric around its center)

Recursive approach
A tree is symmetric if the left subtree is a mirror reflection of the right subtree
therefore, the question is: when are two trees a mirror relfection of each other?
Two trees are a mirror refection of each other if:
-Their two roots have the same value
-the right subtree of each tree is mirror reflection of the left subtree of the other tree

this is like a person looking at a mirror. The relfection in the mirror has the same head,
but the relfection's right arm corresponds to the actual persons left arm and vice versa
The explanation above translate naturally to a recursive function



*/

let isSymmetric = function(root){
    if( root === null ) return true;

    return isMirror(root.left, root.right);

}

function isMirror(left,right){
    //if both sub trees are empty
    if(right == null && left == null ){
        return true;
    //if only one of the sub tree is empty
    } else if(right == null || left == null ) {
         return false;
    //if the values dont match
    } else if (left.val !== right.val) {
        return false; 
    }
    
    
    
    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
   


}