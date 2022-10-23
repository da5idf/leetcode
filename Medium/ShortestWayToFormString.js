var shortestWay = function (source, target) {
    let rounds = 0;
    let t = 0
    while (t < target.length) {
        let thisRound = false;
        for (let i = 0; i < source.length; i++) {
            let targetLetter = target[t]
            let letter = source[i]
            if (targetLetter === letter) {
                thisRound = true;
                t++;
            }
        }
        if (!thisRound) return -1
        rounds++
    }

    return rounds
};


// my solution
var shortestWay = function (source, target) {
    const letters = new Array(26).fill(false);
    for (let i = 0; i < source.length; i++) {
        let charCode = source.charCodeAt(i) - 97;
        letters[charCode] = true;
    }

    let sourceIdx = 0;
    let targetIdx = 0;
    let count = 0;

    while (letters[target.charCodeAt(targetIdx)] && targetIdx < target.length) {
        if (source[sourceIdx] === target[targetIdx]) {
            sourceIdx++;
            targetIdx++;
        }
        else sourceIdx++

        if (sourceIdx === source.length) {
            sourceIdx = 0;
            count++;
        }
    }
    return targetIdx === target.length ? count;
};
