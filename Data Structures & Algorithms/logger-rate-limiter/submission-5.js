class Logger {
    constructor() {}

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    printed = {}
shouldPrintMessage(timestamp, message) {
    if (this.printed[message] !== undefined && timestamp - this.printed[message] < 10) return false
    
    this.printed[message] = timestamp
    return true
}
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
