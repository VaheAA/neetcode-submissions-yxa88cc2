class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings) {
        const map = {}


        for (const string of strings) {
            
            const grouped = []
            for (let i = 0; i < string.length - 1; i++) {
                 const index = this.getCharIndex(string[i])
                 const nextIndex = this.getCharIndex(string[i + 1])
                 const diff = ((nextIndex - index) + 26) % 26

                grouped.push(diff)

                 
            }

            if (grouped in map) map[grouped].push(string)
            else map[grouped] = [string]

        }

        return Object.values(map)
    }

    getCharIndex(char) {
        return  char.charCodeAt(0) - 97
    }
}
