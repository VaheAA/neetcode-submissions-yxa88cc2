class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */
    areSentencesSimilar(sentence1, sentence2, similarPairs) {
        

        if (sentence1.length !== sentence2.length) return false
        
        const pairsMap = {}

        for (let i = 0; i < similarPairs.length; i++) {
                pairsMap[similarPairs[i]] = true

        }

      
        for (let i = 0; i < sentence1.length; i++) {
            const word1 = sentence1[i]
            const word2 = sentence2[i]

            const key1 = [word1, word2].toString()
            const key2 = [word2, word1].toString()



            if (word1 !== word2 && !(pairsMap[key1] || pairsMap[key2])) return false
        }

     
        return true
        
    }
}
