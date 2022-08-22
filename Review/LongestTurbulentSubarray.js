var maxTurbulenceSize = function (arr) {
    let length = arr.length;
    let max = 1;
    let anchor = 0;

    for (let i = 1; i < length; i++) {
        let prev = arr[i - 1] - arr[i];
        if (prev === 0) {
            anchor = i;
            // if we are at the end OR
            // if the prior difference * forward difference is NOT negative
            // i.e. prior/forward differences must be in opposite direction. 
            // one must be > 0, one must be < 0
        } else if (i === length - 1 || prev * (arr[i] - arr[i + 1]) >= 0) {
            max = Math.max(max, i - anchor + 1)
            anchor = i;
        }
    }

    return max;
}

// var maxTurbulenceSize = function (arr) {
//     let max = 1;
//     let current = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let curVal = arr[i];
//         current++;
//         if (i === arr.length - 1) {
//             max = Math.max(max, current)
//         }
//         if (i % 2 === 0) {
//             if (curVal <= arr[i + 1]) {
//                 max = Math.max(max, current)
//                 current = 0;
//             }
//         } else {
//             if (curVal >= arr[i + 1]) {
//                 max = Math.max(max, current)
//                 current = 0;
//             }
//         }
//     }
//     current = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let curVal = arr[i];
//         current++;
//         if (i === arr.length - 1) {
//             max = Math.max(max, current)
//         }
//         if (i % 2 === 0) {
//             if (curVal >= arr[i + 1]) {
//                 max = Math.max(max, current)
//                 current = 0;
//             }
//         } else {
//             if (curVal <= arr[i + 1]) {
//                 max = Math.max(max, current)
//                 current = 0;
//             }
//         }
//     }
//     return max;
// }

let arr = [9, 4, 2, 10, 7, 8, 8, 1, 9]
console.log(maxTurbulenceSize(arr))