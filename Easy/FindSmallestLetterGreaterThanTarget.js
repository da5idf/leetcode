var nextGreatestLetter = function (letters, target) {
    let targetVal = target.charCodeAt(0);

    let i = 0;
    while (i < letters.length && letters[i].charCodeAt(0) <= targetVal) {
        i++;
    }

    return i < letters.length ? letters[i] : letters[0]
}