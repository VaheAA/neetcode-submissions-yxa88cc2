class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {}

        for (const num of nums) {
            map[num] = (map[num] + 1 || 0)
        }

        return Object.values(map).some(num => !!num)
    }
}
