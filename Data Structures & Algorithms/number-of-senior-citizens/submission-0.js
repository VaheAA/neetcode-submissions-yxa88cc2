class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {

        let seniors = 0

        for (const passenger of details) {

            const phone = passenger.substring(0, 9)
            const gender = passenger.charAt(10)
            const age = passenger.substring(11, 13)
            const seat = passenger.substring(13)

            if (age > 60) seniors++

            console.log(phone, gender, age, seat)
        }

        return seniors
    }
}
