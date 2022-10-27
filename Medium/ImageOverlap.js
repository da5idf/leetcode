// my preferred solution with clever mapping over vectors
// keep track of where each img has 1s
// WLOG any 1 on img1 can overlap a 1 on img2
// For each point in img1Ones we can create a vector that 
// describes how to 'reach' each point in img2Ones
// we count how many times that vector appears and find the max vector
var largestOverlap = function (img1, img2) {
    const N = img1.length;
    const img1Ones = []
    const img2Ones = []
    for (let i = 0; i < N * N; i++) {
        let row = Math.floor(i / N)
        let col = i % N
        if (img1[row][col] === 1) img1Ones.push([row, col])
        if (img2[row][col] === 1) img2Ones.push([row, col])
    }

    const overlapMap = {};
    let maxOverlap = 0;
    for (const [aRow, aCol] of img1Ones) {
        for (const [bRow, bCol] of img2Ones) {
            const vector = `${aRow - bRow},${aCol - bCol}`;
            overlapMap[vector] = overlapMap[vector] + 1 || 1;
            if (overlapMap[vector] > maxOverlap) maxOverlap = overlapMap[vector]
        }
    }
    return maxOverlap;
}

/* first solution on Leetcode
var largestOverlap = function (img1, img2) {
    let maxOverlap = 0;

    for (let i = 0; i < img1.length; i++) {
        for (let j = 0; j < img1.length; j++) {
            maxOverlap = Math.max(maxOverlap, shiftAndCount(i, j, img1, img2))

            maxOverlap = Math.max(maxOverlap, shiftAndCount(i, j, img2, img1))
        }
    }

    return maxOverlap
}

var shiftAndCount = function (deltaX, deltaY, shift, stable) {
    let leftShiftCount = 0;
    let rightShiftCount = 0;
    let shiftRow = 0;
    for (let row = deltaY; row < stable.length; row++) {
        let shiftCol = 0;
        for (let col = deltaX; col < stable.length; col++) {
            if (stable[row][col] === 1 && shift[shiftRow][shiftCol] === 1) leftShiftCount++
            if (stable[row][shiftCol] === 1 && shift[shiftRow][col] === 1) rightShiftCount++
            shiftCol++;
        }
        shiftRow++;
    }
    return Math.max(leftShiftCount, rightShiftCount);
}
*/