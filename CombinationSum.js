var combinationSum = function (candidates, target) {
    let mapping = {
        0: {
            sums: [[]],
            strs: new Set()
        }
    };

    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < candidates.length; j++) {
            if (i - candidates[j] >= 0 && mapping[i - candidates[j]] !== undefined) {
                let sumsArr = mapping[i - candidates[j]].sums
                if (!mapping[i]) {
                    mapping[i] = {
                        sums: [],
                        strs: new Set()
                    }
                }

                sumsArr.forEach(el => {
                    copy = [...el]
                    copy.push(candidates[j]);
                    copy.sort((a, b) => a - b)

                    let str = ""
                    for (let num of copy) {
                        str += `${num}`
                    }

                    let sumsStrs = mapping[i].strs
                    if (!sumsStrs.has(str)) {
                        mapping[i].sums.push(copy);
                        mapping[i].strs.add(str);
                    }
                })
            }
        }
    }
    return mapping[target] ? mapping[target].sums : []
};

let candidates = [2], target = 7

console.log(combinationSum(candidates, target))