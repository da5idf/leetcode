var isMatch = function (s, p) {
    let sPointer = 0;
    let pPointer = 0;
    while (sPointer < s.length || pPointer < p.length) {
        if (p[pPointer] === "*") {
            let wildCard = p[pPointer - 1];
            let nextPattern = p[pPointer + 1];
            if (wildCard === ".") {
                if (!nextPattern) return true // '.*' is the only pattern left => true)
                else {
                    while (s[sPointer + 1] && s[sPointer + 1] !==)
                }
            }
            else {
                while (s[sPointer] === wildCard) sPointer++;
                pPointer++;
            }
        }
        else if (s[sPointer] !== p[pPointer] && p[pPointer] !== ".") return false;
        sPointer++;
        pPointer++;
    }
    return true;
};

let s = "aabbcdba"
let p = ".*bc"

console.log(isMatch(s, p));