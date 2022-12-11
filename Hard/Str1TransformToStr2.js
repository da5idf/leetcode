/***
 * This was more a riddle in finding the sufficient criteria for a true mapping.
 * As you can see, the code is very simple.
 * 
 * In order for str1 to map to str2, two criteria must be met:
 *      1. Each character in str1 maps to exactly 1 character 
 *              ex: str1 = "aa" str2 = "bc" is impossible 
 *              however
 *              ex: str1 = "bc" str2 = "a" is possible
 *      2. If our mapping has 26 characters it means that either str1 = str2 or we have a cycle
 *              str1 = "abcdefghijklmnopqrstuvwxyz" 
 *              str2 = "bcdefghijklmnopqrstuvwxyza"
 *              Here, if we change a -> b then when we change b -> c we change the first character of str1
 *                  this creates a cycle. If instead we started at z, z -> a, but then when we change
 *                  str1[0] = a -> b we will be changing the last letter of str1 as well as it was changed
 *                  to a at the start of the algorithm.
 *              In other words, if str1 AND str2 contain every letter of the alphebet but str1 does not equal
 *              str2, then when we change a char in str1, we will be forced to change that letter again when
 *              we reach the mapped letter at a later idx in str1.
 */

var canConvert = function (str1, str2) {
    let map = new Map();
    let seen = new Set();
    for (let i = 0; i < str1.length; i++) {
        let char1 = str1[i];
        let char2 = str2[i];
        if (!map.get(char1)) {
            map.set(char1, char2);
            seen.add(char2);
        } else if (map.get(char1) !== char2) return false;
    }

    if (seen.size === 26) {
        return str1 === str2
    }
    return true;
};