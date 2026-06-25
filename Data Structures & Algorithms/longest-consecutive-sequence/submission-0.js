class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let maxLength = 0

        for (const num of set) {
            const prev = num - 1
           
            if (!set.has(prev)) {
                 let currentLength = 1

                while (set.has(num + currentLength)) {
                    currentLength++
                }

                maxLength = Math.max(currentLength, maxLength)
            }
        }

        return maxLength
    }
}
