class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let ones = 0
        const maxs = []

        for (let i = 0; i < nums.length; i++) {

            if (nums[i] === 1) ones++
            else ones = 0

            maxs.push(ones)
        }

        return Math.max(...maxs)
    }
}
