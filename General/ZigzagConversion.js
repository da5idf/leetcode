var convert = function (s, numRows) {
    if (numRows === 1) return s;

    const zigzagRows = new Array(numRows).fill("");
    let goingDown = false;
    let curRow = 0;
    for (const char of s) {
        zigzagRows[curRow] += char;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1
    }

    let zigzag;
    for (const row of zigzagRows) {
        zigzag += zigzagRows[row];
    }
    return zigzag;
}

/*
var convert = function (s, numRows) {

    if (numRows === 1) return s;
    const zigzagArr = new Array(numRows).fill().map(() => []);
    let zigzag = "";
    let pointer = 0;
    let row = 0;
    let col = 0;
    while (pointer < s.length) {
        while (row < numRows) {
            zigzagArr[row][col] = s[pointer]
            pointer++;
            row++
        }
        row -= 2;
        col++;
        while (row > 0) {
            zigzagArr[row][col] = s[pointer];
            pointer++;
            col++;
            row--;
        }
    }
    for (let row = 0; row < numRows; row++) {
        let rowEntries = zigzagArr[row];
        for (let col = 0; col < rowEntries.length; col++) {
            if (zigzagArr[row][col]) zigzag += zigzagArr[row][col];
        }
    }
    return zigzag;
};
*/