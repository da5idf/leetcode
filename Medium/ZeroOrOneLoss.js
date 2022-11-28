var findWinners = function (matches) {
    const losses = new Array(100001).fill(-1);

    for (const [winner, loser] of matches) {
        if (losses[winner] === -1) losses[winner] = 0
        if (losses[loser] === -1) losses[loser] = 1
        else losses[loser]++;
    }

    const noLosses = [];
    const oneLoss = [];
    for (let i = 0; i < losses.length; i++) {
        if (losses[i] === 0) noLosses.push(i);
        else if (losses[i] === 1) oneLoss.push(i);
    }

    return [noLosses, oneLoss]
}