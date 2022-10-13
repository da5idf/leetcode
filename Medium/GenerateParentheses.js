var generateParenthesis = function (n) {
    const combos = [];
    getCombos(combos, "", 0, 0, n)
    return combos;
}

var getCombos = function (combos, str, open, closed, maxOpen) {
    if (str.length === maxOpen * 2) {
        combos.push(str);
        return;
    }

    if (open < maxOpen) {
        str += "(";
        getCombos(combos, str, open + 1, closed, maxOpen);
        str = str.slice(0, str.length - 1);
    }

    if (closed < open) {
        str += ")"
        getCombos(combos, str, open, closed + 1, maxOpen);
    }
}