var strStr = function (haystack, needle) {
    let start = 0;
    let end = 0

    while (end < haystack.length) {
        if (haystack[end] === needle[needle.length - 1]) {
            start = end - needle.length + 1;
            if (haystack.slice(start, end + 1) === needle) return start;
        }
        end++;
    }

    return -1;
};