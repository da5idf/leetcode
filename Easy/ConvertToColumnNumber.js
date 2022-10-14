var titleToNumber = function (columnTitle) {
    let columnNumber = 0;
    let power = 0;

    for (let i = columnTitle.length - 1; i >= 0; i--, power++) {
        const charCode = columnTitle.charCodeAt(i) - 64;
        columnNumber += Math.pow(26, power) * charCode;
    }

    return columnNumber
}