// similar to maxTurbulenceSize from leet code but
// instead it wants the count of all turbulent sub arrays.

var zigZagCount = function (arr) {
    let length = arr.length;
    let total = 0;
    let anchor = 0;

    for (let i = 1; i < length; i++) {
        let prev = arr[i - 1] - arr[i];
        if (prev === 0) {
            anchor = i;
        }
        else if (i === length - 1 || prev * (arr[i] - arr[i + 1]) >= 0) {
            for (let j = 1; j < i - anchor + 1; j++) {
                total += j
            }
            anchor = i;
        }
    }

    return total;
}

let arr = [9, 4, 2, 10, 7, 8, 8, 1, 9]
// let arr = [9, 4, 4, 2, 6]
console.log(zigZagCount(arr));