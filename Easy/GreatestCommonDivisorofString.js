/***
 * Notice that if prefix divides str1 AND prefix divides str2 then
 *      str1 + str2 === str2 + str1
 *      ex. str1 = ABCABC, str2 = ABC
 *      | ABC | ABC | ABC | no matter how you join them.
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    var gcd = function (x, y) {
        if (y === 0) return x;
        return gcd(y, x % y);
    }

    const gcdLength = gcd(str1.length, str2.length);
    return str1.slice(0, gcdLength + 1);
}

// my solution
var gcdOfStrings = function (str1, str2) {
    let shorter = str1.length <= str2.length ? str1 : str2;
    let longer = shorter === str1 ? str2 : str1;

    var checkPrefix = function (str, prefix) {
        for (let i = 0; i < str.length; i += prefix.length) {
            if (str.slice(i, i + prefix.length) !== prefix) return false;
        }
        return true;
    }
    for (let maxIdx = shorter.length; maxIdx > 0; maxIdx--) {
        if (shorter.length % maxIdx !== 0) continue;
        if (longer.length % maxIdx !== 0) continue;
        const prefix = shorter.slice(0, maxIdx);

        if (checkPrefix(shorter, prefix) && checkPrefix(longer, prefix)) return prefix;
    }

    return ""
};