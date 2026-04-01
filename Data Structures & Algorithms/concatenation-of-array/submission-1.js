class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = []

       for (let i = 0; i < (nums.length * 2); i++) {

            const realIndex = i >= nums.length ? i - nums.length : i

            ans.push(nums[realIndex])
       }


        return ans
    }
}
