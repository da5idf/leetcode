var pourWater = function (heights, volume, k) {
    if (volume === 0) return heights;
    let bottom = k;

    for (let i = k; i >= 0; i--) {
        if (heights[i] > heights[bottom]) break // we've reached a barrier to the left of bottom
        if (heights[i] < heights[bottom]) bottom = i;
    }

    if (bottom !== k) {
        heights[bottom]++;
        return pourWater(heights, volume - 1, k);
    }

    for (let i = k + 1; i < heights.length; i++) {
        if (heights[i] > heights[bottom]) break // we've reached a barrier to the right of bottom
        if (heights[i] < heights[bottom]) bottom = i;
    }

    heights[bottom]++; // here, we don't check if bottom === k because it's ok for heights[k] to increase by 1
    return pourWater(heights, volume - 1, k);
}