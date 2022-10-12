// optimized solution with Trie and Maps
var findWords = function (board, words) {
    const ROWS = board.length;
    const COLS = board[0].length;
    const wordTrie = new Trie(words)
    const foundWords = [];

    var search = function (row, col, node = wordTrie.root) {
        if (row < 0 || row === ROWS || !node.get(board[row][col])) return;
        const char = board[row][col]
        const nextNode = node.get(char);
        const word = nextNode.get("word");

        if (word) {
            foundWords.push(word);
            nextNode.set("word", undefined);
        }

        board[row][col] = '#'

        search(row + 1, col, nextNode);
        search(row - 1, col, nextNode);
        search(row, col + 1, nextNode);
        search(row, col - 1, nextNode);

        board[row][col] = char;

        if (nextNode.size === 0) {
            node.delete(nextNode);
        }
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            search(row, col)
        }
    }

    return foundWords
}

class Trie {
    constructor(words) {
        this.root = new Map();
        words.forEach(word => this.insert(word));
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.has(char)) node.set(char, new Map())
            node = node.get(char);
        }
        node.set("word", word);
    }
}

/* Solution with Trie and POJOs
var findWords = function (board, words) {
    const ROWS = board.length;
    const COLS = board[0].length;
    const wordTrie = new Trie(words)
    const foundWords = [];
    const firstLetterMap = {}
    for (const word of words) {
        if (!firstLetterMap[word[0]]) firstLetterMap[word[0]] = new Set();
        firstLetterMap[word[0]].add(word);
    }

    var search = function (row, col, node = wordTrie.root) {
        if (row < 0 || row === ROWS || !node[board[row][col]]) return;
        const char = board[row][col]
        node = node[char];
        const word = node.word;
        if (word && !firstLetterMap[word[0]]) return;

        if (word) {
            foundWords.push(word);
            firstLetterMap[word[0]].delete(word);
            node.word = undefined;
        }

        board[row][col] = '#'

        search(row + 1, col, node);
        search(row - 1, col, node);
        search(row, col + 1, node);
        search(row, col - 1, node);

        board[row][col] = char;
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            search(row, col)
        }
    }

    return foundWords
}

class Trie {
    constructor(words) {
        this.root = {};
        words.forEach(word => this.insert(word));
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) node[char] = {}
            node = node[char];
        }
        node.word = word;
    }
}
*/

/* seems to work, but Time Limit Exceeded
var findWords = function (board, words) {
    const ROWS = board.length;
    const COLS = board[0].length;

    const firstLetterMap = {}
    for (const word of words) {
        if (!firstLetterMap[word[0]]) firstLetterMap[word[0]] = new Set();
        firstLetterMap[word[0]].add(word);
    }

    var traverseWord = function (word, row, col, letterPointer) {
        console.log(word, row, col, letterPointer);
        if (letterPointer === word.length) return true;
        if (row < 0 || row === ROWS || board[row][col] !== word[letterPointer]) return false;

        board[row][col] = '#';

        let found = false;
        if (
            traverseWord(word, row + 1, col, letterPointer + 1) ||
            traverseWord(word, row - 1, col, letterPointer + 1) ||
            traverseWord(word, row, col + 1, letterPointer + 1) ||
            traverseWord(word, row, col - 1, letterPointer + 1)
        ) found = true;

        board[row][col] = word[letterPointer]
        return found;
    }

    const foundWords = []
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const charSet = firstLetterMap[board[row][col]]
            if (charSet && charSet.size) {
                charSet.forEach(word => {
                    if (traverseWord(word, row, col, 0)) {
                        foundWords.push(word);
                        charSet.delete(word);
                    }
                })
            }
        }
    }

    return foundWords;
};
*/