// var combinationSum = function (candidates, target) {
//     let mapping = {
//         0: {
//             sums: [[]],
//             strs: new Set()
//         }
//     };

//     for (let i = 1; i <= target; i++) {
//         for (let j = 0; j < candidates.length; j++) {
//             if (i - candidates[j] >= 0 && mapping[i - candidates[j]] !== undefined) {
//                 let sumsArr = mapping[i - candidates[j]].sums
//                 if (!mapping[i]) {
//                     mapping[i] = {
//                         sums: [],
//                         strs: new Set()
//                     }
//                 }

//                 sumsArr.forEach(el => {
//                     copy = [...el]
//                     copy.push(candidates[j]);
//                     copy.sort((a, b) => a - b)

//                     let str = ""
//                     for (let num of copy) {
//                         str += `${num}`
//                     }

//                     let sumsStrs = mapping[i].strs
//                     if (!sumsStrs.has(str)) {
//                         mapping[i].sums.push(copy);
//                         mapping[i].strs.add(str);
//                     }
//                 })
//             }
//         }
//     }
//     return mapping[target] ? mapping[target].sums : []
// };

var findSum = function (candidates, target, res, currComb, idx) {
    if (target === 0) {
        res.push([...currComb])
    }

    if (target - candidates[0] < 0) {
        return;
    }

    for (let i = idx; i < candidates.length; i++) {
        let newTarget = target - candidates[i];
        currComb.push(candidates[i]);
        findSum(candidates, newTarget, res, currComb, i);
        currComb.pop();
    }
}

var combinationSum = function (candidates, target) {
    let res = [];
    let currComb = [];

    candidates.sort((a, b) => a - b);

    findSum(candidates, target, res, currComb, 0);

    return res;
}

let candidates = [2, 3, 6, 7], target = 7

console.log(combinationSum(candidates, target))