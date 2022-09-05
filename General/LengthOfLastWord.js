var lengthOfLastWord = function (s) {
    let wordLen = 0;
    let idx = s.length - 1;
    let completed = false;
    let found = false;

    while (!found && idx >= 0) {
        if (s[idx] !== " ") found = true;
        else idx--;
    }

    while (!completed && idx >= 0) {
        if (s[idx] === " ") {
            completed = true
        } else {
            wordLen++;
            idx--;
        }
    }

    return wordLen
};