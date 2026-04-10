class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {


        let count = 0
        const map = {}


        for (let i = 0; i < arr.length; i++) {
            
            map[arr[i]] = true
        }


        for (const num of arr) {
            const x = num + 1
           
            if (map[x]) count++
        }


        return count
    }
}
