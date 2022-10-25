let startTime = [];
let endTime = [];
let profit = [];
for (let i = 0; i < 100; i++) {
    let start = Math.floor(Math.random() * 10000)
    let duration = Math.floor(Math.random() * 10000)
    let end = start + duration
    let thisProfit = Math.floor(Math.random() * 100)

    startTime.push(start);
    endTime.push(end);
    profit.push(thisProfit)
}

console.log(startTime)
console.log()
console.log(endTime)
console.log()
console.log(profit);