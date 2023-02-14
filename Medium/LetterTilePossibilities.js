var numTilePossibilities = function (tiles) {
    const N = tiles.length
    const letterCount = new Array(26).fill(0);
    for (const letter of tiles) {
        const charCode = letter.charCodeAt(0) - 65;
        letterCount[charCode]++
    }

    var dfs = function (arr) {
        let sum = 0;
        for (let i = 0; i < 26; i++) {
            if (arr[i] === 0) continue;
            sum++;
            arr[i]--
            sum += dfs(arr);
            arr[i]++
        }
        return sum;
    }

    return dfs(letterCount)
};