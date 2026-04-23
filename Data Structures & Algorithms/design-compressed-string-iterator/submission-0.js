class StringIterator {
    /**
     * @param {string} compressedString
     */
    pairs = []
    currentIndex = 0
    remaining = 0

    constructor(compressedString) {
        let currentCharacter = undefined
        let count = ''
        for (const char of compressedString) {
          
          if (!this.isDigit(char)) {
            if (currentCharacter) {
                this.pairs.push([currentCharacter, parseInt(count)])
                count = ''
            }
            currentCharacter = char
          }
          else count+= char

        }

          this.pairs.push([currentCharacter, parseInt(count)])
    }

    /**
     * @return {character}
     */
    next() {
        const pair = this.pairs[this.currentIndex]

        pair[1]--

        if (pair[1] === 0) this.currentIndex++

        return pair[0]
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.currentIndex < this.pairs.length
    }

    
    isDigit(char) {
    const code = char.charCodeAt(0);
    
    return code >= 48 && code <= 57;
    }
}

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
