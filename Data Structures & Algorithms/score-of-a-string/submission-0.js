class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {

        let diff = 0

    
        for (let i = 0; i < s.length - 1; i++) {
            const codeCurr = Number(s.charCodeAt(i))
            const codeNext = Number(s.charCodeAt(i + 1))

            diff += Math.abs(codeNext - codeCurr)
        }

        return diff
    }
}
