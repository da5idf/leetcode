class TrieNode {
    child = {}
    count = 0
    endCount = 0
}

var Trie = function () {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;

    for (const char of word) {
        if (!node.child[char]) {
            node.child[char] = new TrieNode();
        }
        node = node.child[char]
        node.count++
    }
    node.endCount++
};

/** 
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function (word) {
    let node = this.root;
    for (const char of word) {
        node = node.child[char]
        if (!node) return 0;
    }

    return node.endCount;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function (prefix) {
    let node = this.root;
    for (const char of prefix) {
        node = node.child[char]
        if (!node) return 0
    }

    return node.count
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function (word) {
    let node = this.root;

    for (const char of word) {
        node = node.child[char];
        if (!node) return;
    }

    if (!node.endCount) return;

    node = this.root;
    for (const char of word) {
        node = node.child[char];
        node.count--
    }
    node.endCount--;
    return node.endCount;
};