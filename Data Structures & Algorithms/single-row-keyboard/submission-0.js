class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard, word) {
        
        const keyMaps = {}
        let prevIndex = 0

        let time = 0

        for (let i = 0; i < keyboard.length; i++) {
            keyMaps[keyboard[i]] = i
        }


        for (const char of word) {
            const index = keyMaps[char]

            time += Math.abs(index - prevIndex)

            prevIndex = index
        }

       
        return time
    }
}
