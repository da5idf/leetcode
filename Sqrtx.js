// var mySqrt = function (x) {

//     if (x < 2) return x;

//     let sqRoot = 0;

//     while (x > 1) {
//         x = Math.floor(x / 2)
//         sqRoot++;
//     }
//     return sqRoot
// };

let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 49) + 1)
}
console.log(arr);