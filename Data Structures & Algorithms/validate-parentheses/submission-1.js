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

        for (let i = 0; i < s.length; i++) {
            const isOpening = Object.keys(this.brackets).includes(s[i])

            if (isOpening) stack.push(s[i])

            else {
                const lastBracket = stack.pop()

                if (this.brackets[lastBracket] !== s[i]) return false
                
            }
        
        }

        return stack.length === 0
        
    }
}
