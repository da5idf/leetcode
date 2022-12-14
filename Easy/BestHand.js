function bestHand(ranks, suits) {
    if (isFlush(suits)) return 'Flush';
    const [isPair, isTriplet] = getMatches(ranks);
    if (isTriplet) return 'Three of a Kind';
    if (isPair) return 'Pair';
    return 'High Card';
}

function isFlush(suits) {
    for (let i = 1; i < suits.length; i++) {
        if (suits[i - 1] !== suits[i]) return false;
    }
    return true;
}

function getMatches(ranks) {
    const map = {};
    let pair = false;
    let triplet = false;
    for (const rank of ranks) {
        map[rank] = (map[rank] || 0) + 1;
        if (map[rank] === 2) pair = true;
        if (map[rank] === 3) triplet = true;
    }

    return [pair, triplet];
}
