var partitionString = function (string) {
    let seen = new Set();
    let count = 0;
    for (let s = 0; s < string.length; s++) {
        if (seen.has(string[s])) {
            count++;
            seen = new Set(string[s]);
        }
        else seen.add(string[s]);
    }

    return count + 1;
}