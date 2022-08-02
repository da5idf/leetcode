var backspaceCompare = function (s, t) {
    let newS = "";
    let newT = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '#') newS += s[i]
        else newS = newS.slice(0, newS.length - 1)
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] !== "#") newT += t[i];
        else newT = newT.slice(0, newT.length - 1)
    }
    return newS === newT
};

let s = "a#c", t = "c"

console.log(backspaceCompare(s, t))