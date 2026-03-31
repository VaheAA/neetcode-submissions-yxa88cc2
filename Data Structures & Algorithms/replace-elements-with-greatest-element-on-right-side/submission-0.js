class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        const lastIndex = arr.length - 1;
        

        for (let i = 0; i < arr.length - 1; i++) {
            if (i === lastIndex) break
            const rest = arr.slice(i+1)
            const max = Math.max(...rest)

            arr[i] = max
        }

        arr[lastIndex] = -1


        return arr
    }
}
