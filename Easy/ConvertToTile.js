/***
 * solution from x372p
 * 
 * n = (A+1) * 26^2 + (B+1) * 26^1 + (Z+1) * 26^0
 * n - 1 = (A+1) * 26^2 + (B+1) * 26^1 + Z
 * 
 * (n - 1) % 26 =  Z
 * (n - 1 - z) / 26 = (A+1) * 26^1 + (B+1) * 26^0   
 *   
 *  */
var convertToTitle = function (columnNumber) {
    let columnTitle = "";
    while (columnNumber > 0) {
        columnNumber--;
        let idx = columnNumber % 26
        columnTitle = String.fromCharCode(65 + idx) + columnTitle
        columnNumber = (columnNumber - idx) / 26;
    }
    return columnTitle;
}


/* first solution
var convertToTitle = function (columnNumber) {

    let columnTitle = "";

    while (columnNumber > 0) {
        let idx = columnNumber % 26;
        if (idx === 0) idx = 26;
        columnTitle += String.fromCharCode(64 + idx) + columnTitle;
        columnNumber = Math.floor(columnNumber / 26)
        if (idx === 0) columnNumber--
    }
    return columnTitle
};
*/

console.log(convertToTitle(52))