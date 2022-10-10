// cleaner set solution
var findAllConcatenatedWordsInADict = function (words) {
    const dict = new Set(words);
    const isConcatenation = (word) => {
        if (dict.has(word)) return true;
        for (let i = 0; i < word.length; i++) {
            let prefix = word.slice(0, i + 1)
            if (dict.has(prefix)) {
                let suffix = word.slice(i + 1)
                if (isConcatenation(suffix)) return true;
            }
        }
        return false;
    }

    const concatenations = [];
    for (const word of words) {
        dict.delete(word);
        if (isConcatenation(word)) concatenations.push(word);
        dict.add(word);
    }
    return concatenations
}


/* my original solution
var findAllConcatenatedWordsInADict = function (words) {
    const trie = new WordTrie();

    for (const word of words) {
        trie.insert(word);
    }

    const concatenations = []
    for (const word of words) {
        const concatFromIdx = new Array(word.length);
        trie.isConcatenation(word, 0, concatFromIdx)
        for (let i = 0; i < concatFromIdx.length - 1; i++) {
            if (concatFromIdx[i]) {
                concatenations.push(word)
                break;
            }
        }
    }

    return concatenations;
};

class WordTrie {
    root = {};

    insert(word) {
        let node = this.root;

        for (const char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }

        node.isWord = true;
    }

    isConcatenation(word, referenceIdx, concatFromIdx) {

        if (concatFromIdx[referenceIdx] === false) return false;
        if (!word) return true;

        let node = this.root;
        let i = 0;

        for (const char of word) {
            if (!node[char]) return false
            else if (node[char].isWord) {
                concatFromIdx[referenceIdx + i] = this.isConcatenation(word.slice(i + 1), referenceIdx + i + 1, concatFromIdx);
                if (concatFromIdx[referenceIdx + i]) return true;
            }
            node = node[char];
            i++;
        }

        return false
    }
}
*/