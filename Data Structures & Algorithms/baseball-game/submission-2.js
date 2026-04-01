class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = []


        for (const op of operations) {
            const num = parseInt(op)

            console.log(record)

            if (!isNaN(num)) record.push(num)
            else if (op === '+') record.push(record[record.length - 1] + record[record.length - 2])
            else if (op === 'C') record.pop()
            else if (op === 'D') record.push(record[record.length - 1] * 2)
        }

        return record.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }
}
