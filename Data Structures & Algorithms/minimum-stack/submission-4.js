class MinStack {
    stack = []
    minimals = []
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.stack.length] = val
        
    if (this.minimals.length === 0 || val <= this.minimals[this.minimals.length - 1]) {
        this.minimals[this.minimals.length] = val
    }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.minimals[this.minimals.length - 1] === this.stack[this.stack.length - 1]) {
            this.minimals.length = this.minimals.length - 1
        }
        this.stack.length = this.stack.length - 1
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minimals[this.minimals.length - 1]
    }
}
