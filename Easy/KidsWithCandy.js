var kidsWithCandies = function (candies, extraCandies) {
    let max = 0;
    for (let i = 0; i < candies.length; i++) {
        max = Math.max(max, candies[i])
    }
    const greatest = []
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) greatest.push(true)
        else greatest.push(false);
    }


    return greatest;
};