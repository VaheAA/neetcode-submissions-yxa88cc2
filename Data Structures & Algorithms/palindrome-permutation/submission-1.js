class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canPermutePalindrome(s) {

        const frequencyMap = {}
        let count = 0

        for (let i = 0; i < s.length; i++) {
            
            frequencyMap[s[i]] = (frequencyMap[s[i]] || 0) + 1
        }

        for (const num in frequencyMap) {

            if (frequencyMap[num] % 2 !== 0) count++
        }

        
        return count <= 1
    }
}
