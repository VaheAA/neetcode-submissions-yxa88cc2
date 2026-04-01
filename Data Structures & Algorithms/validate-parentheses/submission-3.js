class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    brackets = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    isValid(s) {
        if (s.length % 2 !== 0) return false

        const stack = []

        for (const char of s) {

            if (char in this.brackets) stack.push(char)

            else {
                const lastBracket = stack.pop()

                if (this.brackets[lastBracket] !== char) return false
                
            }
        
        }

        return stack.length === 0
        
    }
}
