class MovingAverage {
    /**
     * @param {number} size
     */
    queue = []
    constructor(size) {
        this.size  = size
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
        console.log(this.queue)
        if (this.queue.length < this.size) {
            this.queue.push(val)
        } else {
            this.queue.shift()
            this.queue.push(val)
        }

       return this.queue.reduce((acc, curr) => acc + curr, 0) / this.queue.length 
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size);
 * var param_1 = obj.next(val);
 */
