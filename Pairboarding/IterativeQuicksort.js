// not iterative, but still
const quicksort = (nums) => {

    if (nums.length <= 1) return nums;

    let pivot = nums[0];
    let smaller = [];
    let bigger = [];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= pivot) {
            smaller.push(nums[i]);
        }
        else {
            bigger.push(nums[i]);
        }
    }

    return [...quicksort(smaller), pivot, ...quicksort(bigger)]
}

let a = [9, -3, 5, 2, 6, 8, -6, 1, 3];
console.log(quicksort(a)); // [ -6, -3, 1, 2, 3, 5, 6, 8, 9 ]