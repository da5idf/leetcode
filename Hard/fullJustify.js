/*
1. This forces the else block at the end of words
2. We calculate the current minimum line length by
        adding the length of each word, plus 1 space between words
3. The formatLine function takes a boolean lastLine because the last line
        gets formatted differently.
4. Math.ceil(spaces / numSpaces) is easiest to explain by example.
        say we have 4 words (3 places for spaces) and 7 spaces to insert.
        We put 3 spaces = Math.ceil(7 / 3) for the first spot. 
            This reduces spaces to 7 - 3 = 4 and numSpaces to 3 - 1 = 2
            In other words, for the remaining 2 places we need spaces, 
            we have 4 spaces to use up
        Next we put 2 spaces = Math.ceil(4 / 2) for the second spot.
        And finally we again put 2 spaces = Math.ceil(2 / 1) for the last spot.
5. If lastLine is true, we always add 1 space except for the trailing spaces.
6. If !lastLine, we can simply return.
        else, we might have trailing spaces, which is captured in the spaces variable.
*/

var fullJustify = function (words, maxWidth) {
    const format = [];
    let line = [];
    let wordsLength = 0;

    words.push(spaceMaker(maxWidth)) // 1
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const minLineLength = wordsLength + line.length - 1; // 2
        if (minLineLength + word.length + 1 <= maxWidth) {
            line.push(word);
            wordsLength += word.length;
        } else {
            line = formatLine(line, maxWidth - wordsLength, i === words.length - 1)
            format.push(line);
            line = [word];
            wordsLength = word.length;
        }
    }

    return format;

    function formatLine(line, spaces, lastLine) { // 3
        let spaceLocations = line.length - 1;

        if (spaceLocations === 0) return line.join("") + spaceMaker(spaces);

        let formattedLine = "";
        for (let i = 0; i < line.length; i++) {
            let numSpaces;
            if (!lastLine) {
                numSpaces = Math.ceil(spaces / spaceLocations); // 4
            } else {
                numSpaces = i === line.length - 1 ? 0 : 1; // 5
            }
            spaces -= numSpaces;
            spaceLocations--;
            formattedLine += line[i] + spaceMaker(numSpaces);
        }

        if (!lastLine) return formattedLine; // 6
        return formattedLine + spaceMaker(spaces)
    }

    function spaceMaker(num) {
        let spaces = ""
        for (let i = 0; i < num; i++) spaces += " "
        return spaces;
    }
};