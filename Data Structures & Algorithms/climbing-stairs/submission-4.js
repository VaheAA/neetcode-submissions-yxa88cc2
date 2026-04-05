class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

    const memo = new Array(n + 1).fill(-1)

     function calculate(i) {
        
        if (i === 1) return 1
        if (i === 2) return 2

        if (memo[i] !== -1) return memo[i];

        memo[i] = calculate(i - 1) + calculate(i - 2)

        return memo[i]

     }
       
       return calculate(n)
    }
}
