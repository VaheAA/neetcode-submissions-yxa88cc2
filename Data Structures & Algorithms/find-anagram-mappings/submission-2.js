class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        
        const map = {}
        const res = []

        for (let i = 0; i < nums1.length; i++) {
            const current = nums2[i]
            
            map[current] = i
        }

        for (const num of nums1) {
            res.push(map[num])

        }

        return res
    }
}
