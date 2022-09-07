var letterCombinations = function (digits) {

    if (!digits.length) return [];

    const digitToLetter = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    const digitArr = digits.split("");
    let combinations = [...digitToLetter[digitArr[0]]]

    for (let i = 1; i < digitArr.length; i++) {
        let letters = digitToLetter[digits[i]]
        let newCombos = [];
        for (let j = 0; j < combinations.length; j++) {
            for (let k = 0; k < letters.length; k++) {
                newCombos.push(`${combinations[j]}${letters[k]}`)
            }
        }
        combinations = newCombos;
    }
    return combinations;
};