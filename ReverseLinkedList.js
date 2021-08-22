/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

 1->2->3->4->5
 5->4->-3->->2->1

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    
    let previous = null;
    let current = head;
    let nextTemp = null;
    
    while( current != null){
        nextTemp = current.next;
        current.next = previous;
        
        previous = current;
        current = nextTemp;
    }
    
     return previous
  
    
};