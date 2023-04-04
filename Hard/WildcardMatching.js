/***
 * Backtracking using a while loop and pointers
 * We can't use pattern.length in the while loop criteria because
 * it would exit the loop in certain cases where instead we want to backtrack.
 */

var isMatch = function (string, pattern) {
    let s = 0, p = 0;
    let starIdx = -1, pointer = -1;

    while (s < string.length) {
        // if string[s] === pattern[p] || pattern[p] === "?" we are forced to increment both
        if ((p < pattern.length && string[s] === pattern[p]) || pattern[p] === "?") {
            s++;
            p++;
        }
        // if pattern[p] === "*" we update our tracking indecies in case we need to backtrack
        else if (p < pattern.length && pattern[p] === "*") {
            starIdx = p;
            pointer = s;
            p++;
        }
        // if we get here and we have not encountered a "*" then we can return false
        else if (starIdx === -1) return false;

        // Backtracking
        // We have reached a fail point, but we can backtrack to our last seen "*"
        // In this case, we are using the "*" to pattern match more of string.
        else {
            p = starIdx + 1;
            s = pointer + 1;
            pointer = s;
        }
    }

    // this loop checks if we used the entire pattern
    // it's possible we traversed s but not the entire pattern
    //      s = "aa" p = "aab"
    for (let idx = p; idx < pattern.length; idx++) {
        if (pattern[idx] !== "*") return false;
    }

    return true;
};
