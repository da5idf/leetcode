var ladderLength = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const deadEnds = new Set();
    const inQueue = new Set();
    const queue = [{
        set: new Set().add(beginWord),
        sequence: [beginWord]
    }];
    while (queue.length) {
        const curr = queue.shift();
        const currWordSet = curr.set;
        const currSequence = curr.sequence;
        const curWord = currSequence[currSequence.length - 1]
        currWordSet.add(curWord);
        if (curWord === endWord) return currSequence.length;
        if (!deadEnds.has(curWord)) {
            const oneLetterDiff = getWords(curWord, wordList, currWordSet, deadEnds)
            if (oneLetterDiff.length) {
                for (let word of oneLetterDiff) {
                    queue.push({
                        set: currWordSet,
                        sequence: [...currSequence, word]
                    });
                }
            } else {
                deadEnds.add(curWord);
            }
        }
    }
    return 0;
}

var getWords = function (word, list, inQueue, deadEnds) {
    const diffByOne = [];
    for (let i = 0; i < list.length; i++) {
        let counter = 0;
        const compareWord = list[i]
        for (let j = 0; j < compareWord.length; j++) {
            if (word[j] !== compareWord[j]) counter++
        }
        if (counter === 1 && !inQueue.has(compareWord) && !deadEnds.has(compareWord)) diffByOne.push(compareWord);
    }
    return diffByOne;
}