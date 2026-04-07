class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */

    mappedRotations = {
        0: 0,
        1: 1,
        6: 9,
        8: 8,
        9: 6
    }

    confusingNumber(n) {
        
        const toString = n.toString()
        let rotated = ''

        for (let i = toString.length - 1; i >= 0; i--) {
            const digit = toString[i]


            if (!(digit in this.mappedRotations)) return false

            rotated += this.mappedRotations[digit]
        }

        return parseInt(rotated) !== n
    }
}
