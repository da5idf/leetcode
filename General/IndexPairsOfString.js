var indexPairs = function (text, words) {

    const wordTrie = new Trie();
    const substrings = []

    for (const word of words) {
        wordTrie.insert(word);
    }

    for (let i = 0; i < text.length; i++) {
        let node = wordTrie.root;
        let j = i
        while (node[text[j]]) {
            if (node[text[j]].isWord) substrings.push([i, j]);
            node = node[text[j]];
            j++
        }
    }

    return substrings;
}

class Trie {
    root = {};

    insert(word) {
        let node = this.root;

        for (const char of word) {
            if (!node[char]) {
                node[char] = {};
            }

            node = node[char]

        }

        node.isWord = true;
    }
}