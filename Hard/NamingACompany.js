/****
 * This problem boils down to a double counting problem.
 * prefixSuffix descibes buckets where prefixSuffix[i] has prefix i
 * 
 * So given two buckets at i and j, we need to figure out how many 
 * suffixes overlap. We can ignore which is longer and iterate through i's bucket.
 * For each suffix in prefixSuffix[i] we check if bucket j has it. If it does,
 * then this is a mutual suffix.
 * 
 * After checking all combos of i, j we know how many mutuals we have. Using this info,
 * we can calculate the valid pairs 
 *      (prefixSuffix[i].length - 1 - mutual) * (prefixSuffix[j].length - 1 - mutual) * 2
 */

// more generic version without organizing smaller/bigger
var distinctNames = function (ideas) {
    const prefixSuffix = new Array(26).fill().map(() => [new Set()])
    for (const word of ideas) {
        const suffix = word.slice(1);
        const prefix = word.charCodeAt(0) - 97;

        prefixSuffix[prefix][0].add(suffix) // add suffix into set
        prefixSuffix[prefix].push(suffix) // add suffix into the array
    }

    let valids = 0;
    for (let i = 0; i < 26; i++) {
        for (let j = i + 1; j < 26; j++) {
            let mutual = 0
            for (let k = 1; k < prefixSuffix[i].length; k++) {
                const suffix = prefixSuffix[i][k];
                if (prefixSuffix[j][0].has(suffix)) mutual++
            }
            valids += (prefixSuffix[i].length - 1 - mutual) * (prefixSuffix[j].length - 1 - mutual) * 2
        }
    }

    return valids
};

/* my first solution
var distinctNames = function (ideas) {
    const prefixSuffix = new Array(26).fill().map(() => [new Set()])
    for (const word of ideas) {
        const suffix = word.slice(1);
        const prefix = word.charCodeAt(0) - 97;

        prefixSuffix[prefix][0].add(suffix) // add suffix into set
        prefixSuffix[prefix].push(suffix) // add suffix into the array
    }

    let valids = 0;
    for (let i = 0; i < 26; i++) {
        for (let j = i + 1; j < 26; j++) {
            let mutual = 0
            let k = 0;
            for (let k = 1; k < prefixSuffix[i].length && k < prefixSuffix[j].length; k++) {
                const suffix = prefixSuffix[i][k];
                if (prefixSuffix[j][0].has(suffix)) mutual++
            }
            valids += (prefixSuffix[i].length - 1 - mutual) * (prefixSuffix[j].length - 1 - mutual) * 2
        }
    }

    return valids
};
*/