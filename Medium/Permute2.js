var permuteUnique = function (nums) {
    const counter = new Map();
    const permutations = [];
    const path = [];

    for (const num of nums) {
        counter.set(num, counter.get(num) + 1 || 1)
    }

    var dfs = function () {
        if (path.length === nums.length) {
            permutations.push([...path]);
            return;
        }

        for (const entry of counter.entries()) {
            let num = entry[0];
            let count = entry[1];

            if (count === 0) continue;

            path.push(num);
            counter.set(num, count - 1);

            dfs();

            counter.set(num, count)
            path.pop()
        }
    }
    dfs();
    return permutations;
}