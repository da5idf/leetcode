var longestConsecutive = function (nums) {
    const numSet = {};
    for (const num of nums) {
        numSet[num] = true;
    }

    let longestStreak = 0;
    for (const num of nums) {
        if (!numSet[num - 1]) {
            let currentStreak = 1;
            let currentNum = num;
            while (numSet[currentNum + 1]) {
                currentStreak++;
                currentNum++;
            }

            longestStreak = Math.max(longestStreak, currentStreak)
        }
    }

    return longestStreak
}