var twoSum = function (numbers, target) {

    let res = [];
    let idxI = 0;
    let idxJ = numbers.length - 1;

    while (!res.length) {
        let curSum = numbers[idxI] + numbers[idxJ]
        if (curSum === target) {
            res = [idxI + 1, idxJ + 1];
        }
        else if (curSum < target) {
            idxI++;
        } else {
            idxJ--;
        }
    }
    return res;
}

let numbers = [2, 3, 4]
let target = 6;

console.log(twoSum(numbers, target))