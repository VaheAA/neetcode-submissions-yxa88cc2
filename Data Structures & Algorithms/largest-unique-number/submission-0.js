class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums) {

        let max = -1
        let map = {}

        for (let i = 0; i < nums.length; i++) {
            const current = nums[i]

            map[current] = (map[current] || 0) + 1
            
        }

        for (const num of nums) {
            if (map[num] === 1 && num > max) max = num 
        }



        return max
    }
}
