var permute = function (nums) {
    const inPath = new Set();
    const path = [];
    const permutations = [];

    var dfs = function () {
        if (path.length === nums.length) permutations.push([...path]);

        for (let i = 0; i < nums.length; i++) {
            if (!inPath.has(nums[i])) path.push(nums[i]);
            inPath.add(nums[i]);

            dfs();

            inPath.delete(nums[i])
        }
    }
    dfs();
    return permutations;
}

var permute = function (nums) {
    let result = [[nums.pop()]];

    while (nums.length > 0) {
        let curNum = nums.pop();
        let newResults = []
        for (let i = 0; i < result.length; i++) {
            let perm = result[i];
            // when j === perm.length slice automatically corrects
            for (let j = 0; j <= perm.length; j++) {
                let newPerm = [...perm.slice(0, j), curNum, ...perm.slice(j)];
                newResults.push(newPerm);
            }
        }
        result = [...newResults];
    }

    return result;
};

let nums = [1, 2];
console.log(permute(nums));