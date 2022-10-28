var minDistance = function (word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;

    // if either is len 0, sum returns correct distance
    if (len1 * len2 === 0) return len1 + len2;

    const distances = new Array(len1 + 1).fill().map(el => new Array(len2 + 1))

    for (let i = 0; i < distances.length; i++) distances[i][0] = i
    for (let j = 0; j < distances[0].length; j++) distances[0][j] = j

    for (let i = 1; i < distances.length; i++) {
        for (let j = 1; j < distances[0].length; j++) {
            const distLeft = distances[i][j - 1] + 1;
            const distUp = distances[i - 1][j] + 1;
            let distUpLeft = distances[i - 1][j - 1];
            if (word1[i - 1] !== word2[j - 1]) distUpLeft++;

            distances[i][j] = Math.min(distLeft, distUp, distUpLeft)
        }
    }

    return distances[len1][len2]
};