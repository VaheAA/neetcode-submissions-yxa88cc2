class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {

        let i = 0
        let j = 0

        while (i < s.length && j < t.length) {
            const sub = s[i]

            if (sub === t[j]) {
                i++
                j++
            } else {
                j++
            }
            
        }
    
        return i === s.length 
    }
}
