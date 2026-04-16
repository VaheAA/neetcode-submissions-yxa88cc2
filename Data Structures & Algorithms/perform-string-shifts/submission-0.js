class Solution {
    /**
     * @param {string} s
     * @param {number[][]} shift
     * @return {string}
     */
    stringShift(s, shift) {

        let totalShifts = 0
        
        for (let i = 0; i < shift.length; i++) {
            const [direction, amount] = shift[i]
        
            if (direction === 0) totalShifts -= amount
            else totalShifts += amount
          
        }

        totalShifts = totalShifts % s.length

        if (Math.sign(totalShifts) === -1) {
            return  s.slice(-totalShifts) + s.slice(0, -totalShifts) 

        } else {
            return  s.slice(-totalShifts)  + s.slice(0, -totalShifts) 
        }

    }

}
