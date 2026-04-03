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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let dummy = new ListNode(0)
        let current = dummy
        let current1 = list1
        let current2 = list2

        while (current2 !== null && current1 !== null) {
            
            if (current1.val <= current2.val) {
                current.next = current1
                current1 = current1.next
                current = current.next

            } else {
                current.next = current2
                current2 = current2.next
                current = current.next

            }

        }

        current.next = current1 || current2

        return dummy.next
    }
}
