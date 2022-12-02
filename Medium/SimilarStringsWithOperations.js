/***
 * Two conditions must be met
 * 1. WLOG a character in word1 must be in word2
 * 2. The frequency of characters must be the same. In other words,
 *      if 3 characters in word1 occur 4 times, word2 must also have
 *      exactly 3 characters that occur 4 times.
 */

var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    const counts1 = {}
    const counts2 = {}

    for (let i = 0; i < word1.length; i++) {
        counts1[word1[i]] = (counts1[word1[i]] || 0) + 1;
        counts2[word2[i]] = (counts2[word2[i]] || 0) + 1;
    }

    const counts = new Array(10 ** 5).fill(0);
    for (const letter in counts1) {
        if (!counts2[letter]) return false;
        counts[counts1[letter]]++
    }
    for (const letter in counts2) {
        if (!counts1[letter]) return false;
        counts[counts2[letter]]--
    }

    for (let i = 0; i < counts.length; i++) {
        if (counts[i] !== 0) return false
    }
    return true;
};