// ostensibly my first solution is supposed to be faster than the 
// search + binary search solution, but it's not running that way.
// in either case, this is a refactored version.
var successfulPairs = function (spells, potions, success) {

    for (let i = 0; i < spells.length; i++) {
        spells[i] = [spells[i], i]
    }

    spells.sort((a, b) => b[0] - a[0]);
    potions.sort((a, b) => a - b);

    const P = potions.length;
    let p = 0;
    const ans = new Array(spells.length).fill(0)
    for (const [spell, idx] of spells) {
        while (spell * potions[p] < success) p++;
        ans[idx] = P - p;
    }

    return ans
}

// sorting + binary search solution
var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);
    const S = spells.length;
    const P = potions.length
    const ans = new Array(S).fill(0);
    const maxPotion = potions[P - 1]
    for (let i = 0; i < S; i++) {
        minPotion = Math.ceil(success / spells[i]);
        if (minPotion > maxPotion) continue;
        ans[i] = P - binarySearch(minPotion);
    }

    return ans;

    function binarySearch(num) {
        let low = 0;
        let high = P - 1;

        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (potions[mid] < num) low = mid + 1;
            else high = mid;
        }

        return low;
    }
}

// Very slow first solution, but I had the right idea.
var successfulPairs = function (spells, potions, success) {

    for (let i = 0; i < spells.length; i++) {
        spells[i] = [spells[i], i]
    }

    spells.sort((a, b) => b[0] - a[0]);
    potions.sort((a, b) => a - b);

    const P = potions.length;
    let p = 0;
    const ans = []
    for (let i = 0; i < spells.length; i++) {
        const spell = spells[i][0];
        while (spell * potions[p] < success) p++;
        ans[i] = P - p;
    }

    return ans
}