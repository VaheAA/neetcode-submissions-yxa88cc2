class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head; 
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
    let current = this.head.next
    let currentIndex = 0
    
     while (current && currentIndex < index) {
        currentIndex++
        current = current.next

     }


        return current ? current.val : -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new ListNode(val)
        newNode.next = this.head.next
        this.head.next = newNode

       if (this.head === this.tail) this.tail = newNode
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
            this.tail.next = new ListNode(val)
            this.tail = this.tail.next
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let previous = this.head
        let current = this.head.next
        let currentIndex = 0


        while (current && currentIndex < index) {
            currentIndex++
            
            previous = current
            current = current.next

        }

        if (current) {
            previous.next = current.next

            if (current === this.tail)  this.tail = previous

            return true
        }

        return false
    }

    /**
     * @return {number[]}
     */
    getValues() {

        const values = []
        let current = this.head.next


        while (current) {
            values.push(current.val)
            current = current.next
        }

        return values
    }
}
