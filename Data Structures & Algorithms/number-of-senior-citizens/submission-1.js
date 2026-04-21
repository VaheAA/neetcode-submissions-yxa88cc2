class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {

        let seniors = 0

        for (const passenger of details) {
            const age = passenger.substring(11, 13)
            if (age > 60) seniors++
        }

        return seniors
    }
}
