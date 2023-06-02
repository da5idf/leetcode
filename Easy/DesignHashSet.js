var MyHashSet = function () {
    this.keyRange = 769;
    this.buckets = new Array(this.keyRange);
    for (let i = 0; i < this.keyRange; i++) {
        this.buckets[i] = new Bucket();
    }

    this.hash = function (key) {
        return key % this.keyRange;
    }
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
    return this.buckets[bucketIdx].contains(key)
};

class BST {
    constructor() {
        this.root = null;
    }

    insertBST(root, val) {
        if (!root) return new Node(val);

        if (val > root.val) root.right = this.insertBST(root.right, val);
        else if (val < root.val) root.left = this.insertBST(root.left, val);
        else return root; // skip insertion

        return root;
    }



    deleteNode(root, key) {
        const successor = (node) => {
            node = node.right;
            while (node.left) {
                node = node.left;
            }
            return node.val;
        };

        const predecessor = (node) => {
            node = node.left;
            while (node.right) {
                node = node.right;
            }
            return node.val;
        };
        if (!root) {
            return null;
        }
        if (root.val < key) {
            root.right = this.deleteNode(root.right, key);
        } else if (root.val > key) {
            root.left = this.deleteNode(root.left, key);
        } else if (root.left) {
            root.val = predecessor(root);
            root.left = this.deleteNode(root.left, root.val);
        } else if (root.right) {
            root.val = successor(root);
            root.right = this.deleteNode(root.right, root.val);
        } else {
            root = null;
        }
        return root;
    };

    searchBST(root, val) {
        if (!root) return false
        else if (root.val === val) return true;

        else if (val > root.val) return this.searchBST(root.right, val);
        else return this.searchBST(root.left, val)

    }
}


class Bucket {
    constructor() {
        this.tree = new BST();
    }

    insert(key) {
        this.tree.root = this.tree.insertBST(this.tree.root, key)
    }

    contains(key) {
        // const node = this.tree.searchBST(this.tree.root, key)
        // return node !== null && node !== undefined;
        return this.tree.searchBST(this.tree.root, key)
    }

    delete(key) {
        this.tree.root = this.tree.deleteNode(this.tree.root, key);
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}