class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const map1 = {}
        const map2 = {}

        for (const char of s) {
            map1[char] = (map1[char] + 1 || 0)
        }

        for (const char of t) {
            map2[char] = (map2[char] + 1 || 0)
        }

       return Object.keys(map1).every(key => map1[key] === map2[key])
    }
}
