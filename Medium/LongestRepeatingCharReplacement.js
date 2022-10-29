/***
 * The key to note about this problem is that at certain
 * points, the window may be invalid. The insight is that
 * the max window will be the max of 
 *      (length of window) - (# of max char) > k
 * For example, if k = 3 and the length is 6 then we must have
 * a character with at least 3 appearances. 
 * When we fail this criteria, we don't need to shrink the window
 * to get a valid window back. After all, we want to find a max.
 * So we move start up and end up one by one until we either
 * expand the window or reach the end of our string.
 * In the end we reach the end of the string, of course. At that point
 * because we never shrunk the windwo from our max. end - start is the max.
 * We don't need to add 1 to end - start because we add 1 to end at the 
 * end of the for loop.
 */
var characterReplacement = function (s, k) {

    const map = {}
    let maxCharCount = 0;
    let start = 0;
    let end = 0;

    for (end; end < s.length; end++) {
        const char = s[end];
        map[char] = (map[char] || 0) + 1;
        if (map[char] > maxCharCount) maxCharCount = map[char]

        while (end - start + 1 - maxCharCount > k) {
            const startChar = s[start];
            map[startChar]--;
            start++
        }
    }
    return end - start;
};

/* Alternate solution
var characterReplacement = function(s, k) {

    const map = {}
    let maxCharCount = 0;
    let start = 0;
    let end = 0;
    while (end < s.length) {
        const char = s[end];
        map[char] = (map[char] || 0) + 1;
        
        if (map[char] > maxCharCount) maxCharCount = map[char]

        while (end - start + 1 - maxCharCount > k) {
            const startChar = s[start];
            map[startChar]--; 
            start++
        }
        end++
    }
    return end - start;
};
*/