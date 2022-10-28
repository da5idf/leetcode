var canPlaceFlowers = function (flowerbed, n) {

    for (let i = 0; i < flowerbed.length; i++) {
        const left = flowerbed[i - 1] === 1;
        const right = flowerbed[i + 1] === 1;
        if (!left && !right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--
        }
    }

    return n <= 0
};