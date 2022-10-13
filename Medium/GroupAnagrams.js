var groupAnagrams = function (words) {

    const map = {}

    for (const word of words) {
        const letterArr = word.split("");
        letterArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
        orderedLetters = letterArr.join("");

        if (!map[orderedLetters]) {
            map[orderedLetters] = [];
        }

        map[orderedLetters].push(word);
    }

    return Object.values(map);
}