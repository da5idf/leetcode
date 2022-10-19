// sneaky fast trie method
class Trie {
    root = {};

    insertWord(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) node[char] = {};

            node = node[char];
        }
        node.isWord = true;
    }
}

var topKFrequent = function (words, k) {
    const wordCount = words.length
    if (k === 0 || k > wordCount) return [];

    let wordMap = {};
    for (const word of words) {
        wordMap[word] = wordMap[word] + 1 || 1
    }

    let buckets = new Array(wordCount + 1);
    for (const word in wordMap) {
        let count = wordMap[word];
        if (!buckets[count]) {
            buckets[count] = new Trie()
        }
        buckets[count].insertWord(word);
    }

    let curBucket = wordCount + 1;
    let mostFrequent = [];
    let remainingCount = k;
    var getWords = function (node, prefix) {
        if (remainingCount === 0) return;

        if (node.isWord) {
            remainingCount--;
            mostFrequent.push(prefix)
        }

        for (let i = 0; i < 26; i++) {
            let char = String.fromCharCode(97 + i)
            if (node[char]) {
                getWords(node[char], prefix + char)
            }
        }
    }

    while (curBucket > 0 && remainingCount > 0) {
        if (buckets[curBucket]) {
            let root = buckets[curBucket].root;
            getWords(root, "");
        }
        curBucket--;
    }

    return mostFrequent
}


/*
var topKFrequent = function (words, k) {
    let wordMap = {};
    for (const word of words) {
        if (!wordMap[word]) wordMap[word] = [0, word]

        wordMap[word][0]++;
    }

    const sorted = Object.values(wordMap).sort((a, b) => {
        if (b[0] !== a[0]) return b[0] - a[0];
        return b[1] < a[1] ? 1 : -1
    });

    let mostFrequent = [];
    for (let i = 0; i < k; i++) {
        mostFrequent.push(sorted[i][1])
    }
    return mostFrequent
};
*/