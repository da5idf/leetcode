var findNumberOfLIS = function (nums) {

    let tracker = new Array(nums.length).fill(1);
    let frequency = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {

            if (nums[j] < nums[i]) {

                if (tracker[i] < tracker[j] + 1) {
                    tracker[i] = tracker[j] + 1;

                    frequency[i] = frequency[j];
                } else if (tracker[i] === tracker[j] + 1) {

                    frequency[i] += frequency[j];
                }
            }
        }
    }

    const longestPath = Math.max(...tracker);

    let result = 0;
    for (let k = 0; k < nums.length; k++) {
        if (tracker[k] === longestPath) result += frequency[k];
    }

    return result;
};

const nums = [1, 3, 5, 4, 7];

console.log(findNumberOfLIS(nums));