class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        const mapping = []

        let i = 0
        let j = 0

        while (i < nums1.length) {

            if (nums1[i] === nums2[j]) {
                mapping.push(j)

                i++
                

            } 

            if (j === nums2.length - 1) j = 0
            else j++ 
               
        }

        return mapping
    }
}
