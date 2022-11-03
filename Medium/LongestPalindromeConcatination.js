var longestPalindrome = function (words) {
    const map = {};
    let length = 0;

    for (let word of words) {

        const reversedWord = `${word[1]}${word[0]}`;

        if (map[reversedWord]) {
            map[reversedWord]--;
            length += 4;
        } else {
            map[word] = map[word] + 1 || 1;
        }
    }
    const hashGotMorePalindromes = Object.keys(map).filter(str => map[str] && `${str[1]}${str[0]}` === str);

    if (hashGotMorePalindromes.length) length += 2;

    return length;
};

/* my solution
var longestPalindrome = function (words) {
    let map = {}
    let sameMaxOdd = 0;

    for (const word of words) {
        map[word] = (map[word] || 0) + 1;
        if (word[0] === word[1] && map[word] % 2 === 1) {
            sameMaxOdd = Math.max(sameMaxOdd, map[word]);
        }
    }

    let length = 0;
    let sameMaxOddCount = 0;
    for (const [word, count] of Object.entries(map)) {
        if (word[0] === word[1]) {
            if (count < sameMaxOdd && count % 2 === 0) length += count * 2;
            else if (count < sameMaxOdd) length += (count * 2) - 2;
            else {
                length += (count * 2) - 2
                sameMaxOddCount++;
            }
        }
        else {
            const match = `${word[1]}${word[0]}`;
            if (map[match]) {
                length += Math.min(map[match], count) * 2
            }
        }
    }

    return sameMaxOddCount >= 1 ? length + 2 : length;
};
*/