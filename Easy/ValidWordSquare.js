var validWordSquare = function (words) {
    const ROWS = words.length;
    for (let row = 0; row < ROWS; row++) {
        let wordLen = words[row].length
        for (let col = 0; col < wordLen; col++) {
            if (!words[col] || words[col][row] !== words[row][col]) return false;
        }
    }
    return true;
};