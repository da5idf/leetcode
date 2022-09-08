/*
You are given an array of integers numbers and two integers left and right. 
Your task is to calculate a boolean array result, where result[i] = true 
if there exists an integer x, such that numbers[i] = (i + 1) * x and left ≤ x ≤ right.
Otherwise, result[i] should be set to false.
*/

function solution(numbers, left, right) {

    const result = new Array(numbers.length).fill(false);

    for (let i = 0; i < numbers.length; i++) {
        let curNum = numbers[i];
        let target = curNum / (i + 1);
        if (target % 1 !== 0) continue;

        else if (left <= target && right >= target) {
            result[i] = true;
        }
    }
    return result;
}

// this passed on a different practice test
function solution(numbers, left, right) {
    let result = [];
    let map = {};

    for (let i = 0; i < numbers.length; i++) {
        let target = numbers[i] / (i + 1);
        if (target % 1 === 0 && target >= left && target <= right) result.push(true)
        else result.push(false);
    }
    return result;
}

let numbers1 = [8, 5, 6, 16, 5]
let left1 = 1
let right1 = 3
// console.log(solution(numbers1, left1, right1)) // [false, false, true, false, true]

let numbers2 = [1, 2, 3, 4, 5]
let left2 = 2
let right2 = 10000
// console.log(solution(numbers2, left2, right2)) // [false, false, false, false, false]

let numbers3 = [1000000, 20000]
let left3 = 10000
let right3 = 10000
// console.log(solution(numbers3, left3, right3)) // [false, true]

let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
let left4 = 1
let right4 = 10000
console.log(solution(numbers4, left4, right4)) // [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]