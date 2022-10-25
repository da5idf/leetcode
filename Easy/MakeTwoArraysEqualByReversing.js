var canBeEqual = function (target, arr) {
    const numCounts = {};
    for (let i = 0; i < target.length; i++) {
        numCounts[target[i]] = (numCounts[target[i]] || 0) + 1
        numCounts[arr[i]] = (numCounts[arr[i]] || 0) - 1
    }

    for (let i = 0; i < target.length; i++) {
        if (numCounts[target[i]] !== 0) return false;
    }

    return true;
};

var reverse = function (arr) {

}