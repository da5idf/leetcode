/*
First we search for the pivot index-- the index at which
the array is shifted ie index i s.t. nums[i] < nums[i - 1];

Now we have 2 arrays and we can search for our target in the
appropriate array.
If the 'shifted' array nums is actually still sorted, we just search that one
*/

var search = function (nums, target) {

    const findPivot = (arr) => {
        let left = 0;
        let right = arr.length - 1;
        const firstVal = arr[0]

        while (left <= right) {
            const mid = Math.ceil((left + right) / 2);

            if (arr[mid] >= firstVal) left = mid + 1
            else right = mid - 1;
        }

        return left;
    }

    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = Math.ceil((left + right) / 2);

            if (arr[mid] === target) return mid;
            else if (arr[mid] > target) right = mid - 1;
            else left = mid + 1;
        }

        return -1;
    }

    const pivot = findPivot(nums);
    if (target >= nums[0] && target <= nums[pivot - 1]) {
        return binarySearch(nums.slice(0, pivot), target)
    } else {
        const idx = binarySearch(nums.slice(pivot), target);
        return idx === -1 ? idx : pivot + idx
    }
};