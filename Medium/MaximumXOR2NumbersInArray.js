var findMaximumXOR = function (nums) {
    let trie = new Trie();

    for (const num of nums) {
        trie.insert(num);
    }

    const MAX_INT = Math.pow(2, 31) - 1;
    let answer = 0;
    for (const num of nums) {
        const target = MAX_INT - num
        const found = trie.search(target);
        answer = Math.max(answer, num ^ found);
    }
    return answer;
}

class Trie {
    root = new Map();

    insert(number) {
        let node = this.root;
        let index = 30;
        while (index >= 0) {
            let mask = 1 << index;
            let bit = (number & mask) > 0 ? 1 : 0;
            // let bit2 = number & mask can not do this as it returns base 10

            if (!node.has(bit)) {
                node.set(bit, new Map())
            }
            node = node.get(bit);
            index--;
        }
    }

    search(number) {
        let ans = 0;
        let node = this.root;
        let index = 30;
        while (index >= 0) {
            let mask = 1 << index;
            let bit = (number & mask) > 0 ? 1 : 0;

            if (!node.has(bit)) {
                bit = bit === 0 ? 1 : 0
            }

            node = node.get(bit);

            if (bit) {
                ans += mask
            }
            index--;
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