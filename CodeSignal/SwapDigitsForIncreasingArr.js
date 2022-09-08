/*
You are given an array of non-negative integers numbers. You are allowed to choose any number from this array and swap any two digits in it. If after the swap operation the number contains leading zeros, they can be omitted and not considered (eg: 010 will be considered just 10).

Your task is to check whether it is possible to apply the swap operation at most once, so that the elements of the resulting array are strictly increasing.
*/

function solution(numbers) {
    let swapCount = 0;
    const swapIdices = []

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i + 1] < numbers[i]) {
            swapCount++;
            changeNumber(numbers[i], numbers[i + 1], numbers, i + 1)
        }
    }

    for (let i = 0; i < swapIdices.length; i++) {
        let idx = swapIdices[i];
        if (idx > 0 && idx < numbers.length - 1) {
            console.log(numbers[idx - 1], numbers[idx], numbers[idx + 1])
        }
    }
    return swapCount <= 1 ? true : false
}


function changeNumber(smaller, bigger, numbers, changeIdx) {
    const sma = [];
    while (smaller > 0) {
        let digit = num % 10;
        digits.push(digit);
        num = (num - digit) / 10;
    }
    digits.sort((a, b) => a - b);
}

let numbers1 = [1, 3, 900, 10] // true
let numbers2 = [1, 5, 10, 20] // true
let numbers3 = [13, 31, 30] // false
let numbers4 = [1000, 10, 100] // true
let numbers5 = [527, 516, 216, 965, 951] // false
let numbers6 = [68, 105, 131, 396, 438, 754, 744, 817] // true
let numbers7 = [92, 121, 193, 293, 328, 345, 343, 475, 478, 154, 250, 706, 929]
let numbers8 = [64, 281, 219, 239, 291, 299, 308, 352, 371, 421, 405, 497, 875, 648, 725, 832, 877, 911, 925, 929, 954] // false
let numbers9 = [43, 46, 68, 79, 94, 109, 131, 140, 172, 192, 193, 195, 426, 294, 302, 359, 436, 439, 517, 520, 607, 619, 692, 807, 714, 753, 796, 803, 807, 879, 890, 899, 945, 962] // false

console.log(solution(numbers1))
