/*********************************** DFS SOLUTION **********************************/
var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    const queue = [0];
    const visited = new Array(s.length).fill(false);
    const inQueue = new Set();

    while (queue.length) {
        const start = queue.shift();
        inQueue.delete(start);
        if (visited[start]) {
            continue;
        }
        for (let end = start + 1; end <= s.length; end++) {
            let substring = s.slice(start, end);
            if (wordSet.has(substring) && !inQueue.has(end)) {
                queue.push(end);
                inQueue.add(end);
                if (end === s.length) return true;
            }
        }
        visited[start] = true;
    }

    return false;
}


/*********************************** RECURSIVE SOLUTION **********************************/
// var wordBreak = function (s, wordDict) {
//     const wordSet = new Set(wordDict);
//     const memo = {};

//     const recurse = (i) => {
//         if (i === s.length) return true;

//         // has to be === false because we don't want to include other falsy values
//         if (memo[i] === false) return memo[i]

//         for (let j = i + 1; j <= s.length; j++) {
//             let substring = s.slice(i, j);
//             if (wordSet.has(substring) && recurse(j)) {
//                 return true;
//             }
//         }
//         return memo[i] = false;
//     }

//     return recurse(0);
// };

let s = "aaaaaaaaaaaab"
let wordDict = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]
console.log(wordBreak(s, wordDict))