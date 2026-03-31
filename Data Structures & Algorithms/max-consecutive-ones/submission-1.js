class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let ones = 0
        let max = 0

    for (const num of nums) {
        if (num === 1) ones++
        else ones = 0

        if (ones > max) max = ones
    }

    return max
}
}
