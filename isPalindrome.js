var isPalindrome = function (s) {

    let simpleStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    for (let i = 0; i < Math.floor(simpleStr.length / 2); i++) {
        if (simpleStr[i] !== simpleStr[simpleStr.length - 1 - i]) return false
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))