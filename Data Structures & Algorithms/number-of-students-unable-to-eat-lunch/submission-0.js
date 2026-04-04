class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {

        const studentsCount = [0,0]


        for (const student of students) {
            studentsCount[student]++
        }


        for (const sandwich of sandwiches) {

            if (studentsCount[sandwich] === 0) break

            if (studentsCount[sandwich] >= 1) studentsCount[sandwich]--
        }

        

        return Math.max(...studentsCount)
    }
}
