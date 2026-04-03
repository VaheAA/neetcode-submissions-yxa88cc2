/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        
        let save = null
        let prev = null
        let current = head

        while (current != null) {
            save = current.next
            current.next = prev
            prev = current
            current = save
        }
        
       

        return prev
    }
}
