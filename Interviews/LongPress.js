/*
Your friend is typing his name into a keyboard. Sometimes, when typing a character c, 
the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard. Return True if it is possible that 
it was your friends name, with some characters (possibly none) being long pressed.
*/

var isLongPressedName = function (name, typed) {
    let nameIdx = 0;
    let typeIdx = 0;

    while (nameIdx < name.length) {
        const nextChar = name[nameIdx];
        while (typeIdx < typed.length && typed[typeIdx] !== nextChar) {
            if (typed[typeIdx - 1] !== typed[typeIdx]) return false;
            typeIdx++
        }
        if (typeIdx === typed.length) return false;
        nameIdx++;
        typeIdx++;
    }

    while (typeIdx < typed.length) {
        if (typed[typeIdx] !== typed[typeIdx - 1]) return false;
        typeIdx++
    }

    return true;
};