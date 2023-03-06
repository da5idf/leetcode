// binary search
var findKthPositive = function (arr, k) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let pivot = Math.floor((left + right) / 2);
        if (arr[pivot] - pivot - 1 < k) left = pivot + 1
        else right = pivot - 1;
    }

    return left + k
};

// my first solution O(n)
var findKthPositive = function (arr, k) {
    let missing = 0;
    let i = 0;
    let current = 0;
    while (missing < k) {
        if (current + 1 === arr[i]) {
            i++;
        }

        else {
            missing++
        }
        current++
    }

    return current;
};