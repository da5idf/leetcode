var findMaximumXOR = function (nums) {
    const bitTrie = new Trie()
    for (const num of nums) {
        bitTrie.insert(num);
    }

    const MAX_INT = Math.pow(2, 31) - 1;
    let max = 0;
    for (const num of nums) {
        const target = num ^ MAX_INT;
        const found = bitTrie.search(target);
        max = Math.max(max, num ^ found);
    }
    return max
}


class Trie {
    root = new Map();

    insert(number) {
        let node = this.root;
        for (let index = 0; index < 31; index++) {
            let mask = 1 << index
            let bit = (mask & number) > 0 ? 1 : 0
            if (!node.has(bit)) {
                node.set(bit, new Map());
            }
            node = node.get(bit);
        }
    }

    search(number) {
        let node = this.root;
        let ans = 0;
        for (let index = 0; index < 31; index++) {
            let mask = 1 << index;
            let bit = (mask & number) > 0 ? 1 : 0
            if (!node.has(bit)) {
                bit = bit === 0 ? 1 : 0
            }
            node = node.get(bit);
            if (bit) ans += mask;
        }
        return ans;
    }
}

const bitTrie = new Trie()
const nums = [3, 10, 5, 25, 2, 8];
for (const num of nums) {
    bitTrie.insert(num);
}
const MAX_INT = Math.pow(2, 31) - 1;
const target = 25 ^ MAX_INT;
const found = bitTrie.search(target)
console.log(target, found);
