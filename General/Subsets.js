var subsets = function (nums) {
    let sets = [[]];

    for (let i = 0; i < nums.length; i++) {
        let curLength = sets.length;
        for (let j = 0; j < curLength; j++) {
            sets.push([...sets[j], nums[i]])
        }
    }
    return sets;
};