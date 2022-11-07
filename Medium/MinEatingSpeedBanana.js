var minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = 1;
    for (const pile of piles) {
        right = Math.max(right, pile);
    }

    while (left <= right) {
        const speed = Math.floor((left + right) / 2);

        let time = 0;
        for (const pile of piles) {
            time += Math.ceil(pile / speed);
        }

        if (time <= h) {
            right = speed - 1;
        } else left = speed + 1;
    }
    return left
};