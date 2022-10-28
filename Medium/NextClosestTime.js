var nextClosestTime = function (time) {
    const nextTime = time.split("");
    const digits = [nextTime[0], nextTime[1], nextTime[3], nextTime[4]];
    digits.sort((a, b) => a - b);

    nextTime[4] = findNext(time[4], '9', digits);
    if (nextTime[4] > time[4]) return nextTime.join("")

    nextTime[3] = findNext(time[3], '5', digits);
    if (nextTime[3] > time[3]) return nextTime.join("");

    if (nextTime[0] === '2') nextTime[1] = findNext(nextTime[1], '3', digits)
    else nextTime[1] = findNext(nextTime[1], '9', digits)
    if (nextTime[1] > time[1]) return nextTime.join("");

    nextTime[0] = findNext(nextTime[0], '2', digits);
    return nextTime.join("")
}

var findNext = function (current, limit, digits) {
    if (current === limit) return digits[0];

    let pos = digits.indexOf(current);

    while (pos < 4 && (digits[pos] > limit || digits[pos] === current)) {
        pos++;
    }

    return pos === 4 ? digits[0] : digits[pos]
}