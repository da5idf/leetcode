var checkIfPangram = function (sentence) {
    let seen = 0;
    for (let i = 0; i < sentence.length; i++) {
        const charCode = sentence.charCodeAt(i) - 65;
        const bit = 1 << charCode;
        seen |= bit;
    }
    return seen + 1 === 1 << 26
};