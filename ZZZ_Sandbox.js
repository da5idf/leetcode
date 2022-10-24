var check = function (str) {
    // const usedChars = new Array(26).fill(false);
    let bit = str.charCodeAt(0) - 97
    for (let i = 1; i < str.length; i++) {
        let charCode = str.charCodeAt(i) - 97;
        // if (usedChars[charCode]) return false;
        // usedChars[charCode] = true;
        bit = bit & charCode;
    }
    return bit === 0;
}

function isUnique(str) {
    let bits = 0 | 0;

    for (const char of str) {
        const index = char.charCodeAt(0) - 97;

        if (bits & (1 << index)) return false;
        bits |= (1 << index);
    }

    return true;
}

let str = "abc"
console.log(isUnique(str))
// console.log(list)