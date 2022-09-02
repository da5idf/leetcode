// var removeElement = function (nums, val) {
//     let checkLength = nums.length;
//     for (let i = 0; i < checkLength; i++) {
//         if (nums[i] === val) {
//             while (nums[checkLength - 1] === val && checkLength > i + 1) {
//                 checkLength--;
//             }
//             let temp = nums[checkLength - 1];
//             nums[i] = temp;
//             nums[checkLength - 1] = val;
//             checkLength--;
//         }
//     }

//     return checkLength;
// };

// rather than thinking about changing based off value,
// change based off !value and increment each time
var removeElement = function (nums, val) {
    let replaceIdx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[replaceIdx] = nums[i];
            replaceIdx++;
        }
    }
    return replaceIdx;
};