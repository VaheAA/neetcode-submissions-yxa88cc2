class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {

        let lastWord = ''

        const trimmedWord = s.trim()


        for (let i = 0; i < trimmedWord.length; i++) {

            console.log(lastWord)
            
            if (trimmedWord[i] !== ' ') lastWord += trimmedWord[i]
            else lastWord = ''
        }
        

        return lastWord.length
    }
}
