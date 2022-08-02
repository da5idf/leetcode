var convertTime = function (current, correct) {
    const curTimes = current.split(":");
    const curHours = Number(curTimes[0]);
    const curMins = Number(curTimes[1]);
    const correctTime = correct.split(":");
    const correctHours = Number(correctTime[0]);
    const correctMins = Number(correctTime[1]);
    const incrementer = [15, 5, 1];

    // console.log(curHours, curMins, correctHours, correctMins)

    let steps = 0;
    let diffMins;
    if (curMins <= correctMins) {
        steps += correctHours - curHours;
        diffMins = correctMins - curMins;
    } else {
        steps += correctHours - curHours - 1;
        diffMins = correctMins + (60 - curMins);
    }

    let i = 0;
    while (diffMins > 0) {
        if (diffMins - incrementer[i] >= 0) {
            diffMins -= incrementer[i];
            steps++;
        } else {
            i++;
        }
    }

    return steps;
}

console.log(convertTime("02:30", "04:35"))