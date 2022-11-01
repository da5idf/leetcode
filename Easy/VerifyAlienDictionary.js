var isAlienSorted = function (words, order) {
    const orderMap = {};
    for (let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i;
    }

    var firstFirst = function (word1, word2) {
        const LEN1 = word1.length;
        const LEN2 = word2.length;

        for (let i = 0; i < LEN1 && i < LEN2; i++) {
            if (word1[i] !== word2[i])
                return orderMap[word1[i]] < orderMap[word2[i]]

        }
        return LEN1 <= LEN2
    }

    for (let i = 0; i < words.length - 1; i++) {
        if (!firstFirst(words[i], words[i + 1])) return false;
    }
    return true;

};