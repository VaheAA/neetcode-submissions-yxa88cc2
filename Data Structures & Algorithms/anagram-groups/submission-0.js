class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        if (strs.length === 1) return [[strs]]

       const map = {}

        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split('').sort().join("")


            if (!map[key]) map[key] = []

            map[key].push(strs[i])

        }

        return Object.values(map)
    }
}
