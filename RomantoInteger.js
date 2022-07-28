var romanToInt = function (s) {
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let next = s[i + 1];

        if (char === 'I') {
            if (next === "V") {
                total += 4;
                i++;
            }
            else if (next === "X") {
                total += 9;
                i++;
            }
            else {
                total++;
            }
        }
        else if (char === "V") {
            total += 5;
        }
        else if (char === "X") {
            if (next === "L") {
                total += 40;
                i++
            }
            else if (next === "C") {
                total += 90;
                i++;
            }
            else {
                total += 10;
            }
        }
        else if (char === "L") total += 50;
        else if (char === "C") {
            if (next === "D") {
                total += 400
                i++;
            }
            else if (next === "M") {
                total += 900;
                i++;
            }
            else {
                total += 100;
            }
        }
        else if (char === "D") total += 500;
        else if (char === "M") total += 1000;
    }
    return total;
};

let s = "LVIII"

console.log(romanToInt(s));