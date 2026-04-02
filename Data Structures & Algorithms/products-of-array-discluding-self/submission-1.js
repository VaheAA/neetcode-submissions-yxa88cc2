class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []
        
        let prefix = [1]
        let suffix = []
        suffix[nums.length - 1] = 1



        for (let i = 0; i < nums.length - 1; i++) {
            prefix[i + 1] =  prefix[i] * nums[i] 
        }

        for (let i = nums.length - 1; i > 0; i--) {
            suffix[i - 1] = suffix[i] * nums[i]
        }

      

       for (let i = 0; i < nums.length; i++) {
        res[i] = prefix[i] * suffix[i]
       }

        return res 
    }
}
