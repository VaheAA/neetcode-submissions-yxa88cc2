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

        for (let i = 0; i < s.length; i++) {
             map1[s[i]] = (map1[s[i]] || 0) + 1
             map2[t[i]] = (map2[t[i]] || 0) + 1
        }


       return Object.keys(map1).every(key => map1[key] === map2[key])
    }
}
