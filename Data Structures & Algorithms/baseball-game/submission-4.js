class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = []


        for (const op of operations) {
             const last = record.length - 1

             if (op === '+') record.push(record[last] + record[last - 1])
             else if (op === 'D') record.push(record[last] * 2)
             else if (op === 'C') record.pop()
             else record.push(Number(op))
        }

        return record.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }
}
