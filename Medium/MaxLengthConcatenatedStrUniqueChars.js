var maxLength = function (arr) {

    var dfs = function (str, start) {

        if (start === arr.length) {
            return check(str) ? str.length : 0;
        }

        let include = dfs(str + arr[start], start + 1)
        let exclude = dfs(str, start + 1)

        return Math.max(include, exclude);
    }

    return dfs("", 0);
};

var check = function (str) {
    const usedChars = new Array(26).fill(false);
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i) - 97;
        if (usedChars[charCode]) return false;
        usedChars[charCode] = true;
    }
    return true;
}