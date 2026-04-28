class MovingAverage {
    /**
     * @param {number} size
     */
    queue = []
    sum = 0
    constructor(size) {
        this.size  = size
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
            this.sum += val
        
        if (this.queue.length < this.size) {
            this.queue.push(val)
        } else {
            this.sum -= this.queue.shift()
            this.queue.push(val)
        }

       return this.sum  / this.queue.length 
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size);
 * var param_1 = obj.next(val);
 */
