var WordDictionary = function () {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (const char of word) {
        if (!node[char]) node[char] = {};
        node = node[char];
    }
    node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    return this.dfs(word, 0, this.root);
};

WordDictionary.prototype.dfs = function (word, idx, node) {
    if (idx === word.length) return node.isWord === true;

    if (node[word[idx]]) {
        return this.dfs(word, idx + 1, node[word[idx]])
    }
    else if (word[idx] === ".") {
        for (const key in node) {
            if (this.dfs(word, idx + 1, node[key])) return true
        }
    }

    return false;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDict = new WordDictionary();
wordDict.addWord("word");
console.log(wordDict.root);