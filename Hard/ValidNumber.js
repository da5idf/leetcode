var isNumber = function (s) {
    let seenDigit = false;
    let seenExpo = false;
    let seenDot = false;
    // don't need seenSign becuase a sign will either be the first char
    // or it will be immediately after an e/E.

    const digits = "0123456789";
    const expos = "eE";
    for (let i = 0; i < s.length; i++) {
        console.log(i)
        let char = s[i];
        if (digits.includes(char)) {
            seenDigit = true;
        }

        else if (char === "-" || char === "+") {
            // console.log(i !== 0, s[i - 1], !expos.includes(s[i - 1]))
            if (i !== 0 && !expos.includes(s[i - 1])) return false;
        }

        else if (expos.includes(char)) {
            if (seenExpo || !seenDigit) return false;
            seenExpo = true;
            seenDigit = false;
        }

        else if (char === ".") {
            if (seenDot || seenExpo) return false;
            seenDot = true;
        }

        else return false
    }

    return seenDigit;
};