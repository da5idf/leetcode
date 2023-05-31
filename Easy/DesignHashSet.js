var MyHashSet = function () {
    this.keyRange = 769;
    this.buckets = new Array(this.keyRange);
    for (let i = 0; i < this.keyRange; i++) {
        this.buckets[i] = new BST();
    }
};

MyHashSet.prototype.hash = function (key) {
    return key % this.keyRange;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    const bucketIdx = this.hash(key);
    this.buckets[bucketIdx].insert(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    const bucketIdx = this.hash(key);
    this.buckets[bucketIdx].delete(key);
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    const bucketIdx = this.hash(key);
    this.buckets[bucketIdx].contains(key);
};

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (this.root === null) this.root = new Node(val);
        else {
            let node = this.root;
            let prev = node;
            while (node) {
                prev = node;
                if (val > node.val) node = node.right;
                else node = node.left;
            }
            if (val > prev.val) prev.right = val;
            else prev.left = val;
        }
    }

    delete(val) {
        let node = this.root;
        let prev = null;
        while (node) {
            if (node.val === val) break;
            prev = node;
            if (val > node.val) node = node.right;
            else node = node.left;
        }

    }

    contains(val) {
        let node = this.root;
        while (node) {
            if (node.val === val) return true;
            if (val > node.val) node = node.right;
            else node = node.left;
        }
        return false;
    }
}

class Node {
    constructor(val) {
        this.val = val || null;
        this.left = null;
        this.right = null;
    }
}