func hasDuplicate(nums []int) bool {
    lookup := make(map[string]int)

    for _, num := range nums {
        lookup[strconv.Itoa(num)]++
    }

    for _, value := range lookup {
        if value > 1 {
            return true
        }
    }

    return false
}
