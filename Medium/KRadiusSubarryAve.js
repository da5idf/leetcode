/*
Same solution as my original, but without suffix sum
Utilizes the fact that the sum in a range can be 
calculated from the prefix sum. 
The only trick/change is that we need prefix[0] = 0, so we make
the array 1 element longer. Otherwise prefix[0] = nums[0] and 
when i - k = 0, we'd be subtracting nums[0], which we don't want to do.
For range i - k -> i + k
prefix[i + k + 1] - prefix[i - k] give us the sum we need
*/
var getAverages = function (nums, k) {
    const N = nums.length;
    const prefix = new Array(N + 1).fill(0);
    let prefixSum = 0;

    for (let i = 1; i <= N; i++) {
        prefixSum += nums[i - 1];
        prefix[i] = prefixSum;
    }

    const ans = new Array(N);
    const denominator = k * 2 + 1;
    for (let i = 0; i < N; i++) {
        if (i - k < 0) ans[i] = -1;
        else if (i + k >= N) ans[i] = -1;
        else {
            ans[i] = Math.floor((prefix[i + k + 1] - prefix[i - k]) / denominator)
        }
    }
    return ans;
};

/*
My first solution. Forgot that I could get by with just
using a prefix sum. That answer is above
*/
var getAverages = function (nums, k) {
    const N = nums.length;


    const prefix = new Array(N);
    let prefixSum = 0;
    const suffix = new Array(N);
    let suffixSum = 0;
    for (let i = 0, j = N - 1; i < N; i++, j--) {
        prefix[i] = prefixSum;
        suffix[j] = suffixSum;
        prefixSum += nums[i];
        suffixSum += nums[j];
    }

    const ans = new Array(N);
    const denominator = k * 2 + 1;
    for (let i = 0; i < N; i++) {
        if (i - k < 0) ans[i] = -1;
        else if (i + k >= N) ans[i] = -1;
        else {
            const left = prefix[i] - prefix[i - k];
            const right = suffix[i] - suffix[i + k];
            ans[i] = Math.floor((left + right + nums[i]) / denominator)
        }
    }
    return ans;
};