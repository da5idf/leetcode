/*
An integer n is called a full square, if there exists some integer s, such that n = s * s. 
Examples of full squares are 0, 1, 4, 9, 16, etc.

Given an array of distinct integers numbers, your task is to find the number of pairs of indices (i, j) such that 
i ≤ j and the sum numbers[i] + numbers[j] is a full square.

For
numbers = [-1, 18, 3, 1, 5]
solution(numbers) = 4
pairs i, j are [0, 3], [0, 4], [2, 3], [1, 1]
*/

function solution(numbers) {
    let count = 0;

    pairMapping = {}

    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i];
        for (let j = i; j < numbers.length; j++) {
            let num2 = numbers[j];
            if (Math.sqrt(num1 + num2) % 1 === 0) count++
        }
    }
    return count;
}
