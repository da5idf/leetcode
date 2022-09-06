/*
Given an array of unique integers numbers, your task is to find the number of pairs of indices(i, j) 
such that i ≤ j and the sum numbers[i] + numbers[j] is equal to some power of 2.

Note: numbers 2^0 = 1, 2^1 = 2, 2^2 = 4, 2^3 = 8, etc. are considered to be powers of 2.

Example
For numbers = [1, -1, 2, 3], the output should be solution(numbers) = 5.
There is one pair of indices where the corresponding elements sum up to 1:
    (1, 2): numbers[1] + numbers[2] = -1 + 2 = 1
There are two pairs of indices where the corresponding elements sum up to 21 = 2:
    (0, 0): numbers[0] + numbers[0] = 1 + 1 = 2
    (1, 3): numbers[1] + numbers[3] = -1 + 3 = 2
There are two pairs of indices where the corresponding elements sum up to 22 = 4:
    (0, 3): numbers[0] + numbers[3] = 1 + 3 = 4
    (2, 2): numbers[2] + numbers[2] = 2 + 2 = 4
In total, there are 1 + 2 + 2 = 5 pairs summing up to powers of two.

For numbers = [2], the output should be solution(numbers) = 1.
The only pair of indices is (0, 0) and the sum of corresponding elements is equal to 22 = 4. So, the answer is 1.

For numbers = [-2, -1, 0, 1, 2], the output should be solution(numbers) = 5.
There are two pairs of indices where the corresponding elements sum up to 1: (2, 3) and(1, 4)
There are two pairs of indices where the corresponding elements sum up to 2: (2, 4) and(3, 3)
There is one pair of indices where the corresponding elements sum up to 4: (4, 4)
In total, there are 2 + 2 + 1 = 5 pairs summing up to powers of 2
*/

function solution(numbers) {

    numbers.sort((a, b) => a - b);
    const length = numbers.length;
    const max = numbers[length - 1];
    let powTwo;
    const history = {};
    let totalCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        powTwo = 1;
        while (powTwo <= max * 2) {
            let difference = powTwo - numbers[i];
            powTwo *= 2;
            if (difference < numbers[i] || difference > max) continue;
            else {
                difIdx = binarySearch(numbers, difference, history);
                if (difIdx >= 0) {
                    totalCount++
                    console.log(difIdx, i)
                }
            }
        }
    }
    return totalCount;
}

function binarySearch(numbers, target, history) {
    if (history[target]) return history[target]

    let left = 0;
    let right = numbers.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (numbers[mid] === target) {
            history[target] = mid;
            return mid;
        }
        else if (numbers[mid] > target) right = mid - 1;
        else left = mid + 1
    }
    return -1
}

let numbers1 = [1, -1, 2, 3]
let numbers2 = [2]
let numbers3 = [-2, -1, 0, 1, 2]
let numbers4 = [-1000000, 1000000, 0, 1, 2, 4, 8]
let numbers5 = [5, 10, 3, 7, -1, 1, 8, 9]

// console.log(solution(numbers1)) // 5
// console.log(solution(numbers2)) // 1
// console.log(solution(numbers3)) // 5
console.log(solution(numbers4)) // 8
// console.log(solution(numbers5)) // 9