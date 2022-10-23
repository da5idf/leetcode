function swap(list, iA, iB) {
    let temp = list[iA];
    list[iA] = list[iB];
    list[iB] = temp;
}

function partition(list, low, high) {
    // Pivot is the last element of the list.
    let x = list[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (list[j] <= x) {
            i++;
            swap(list, i, j);
        }
    }
    swap(list, (i + 1), high);
    console.log(list, i + 1);
    return i + 1;
}

let list = [4, 3, 1, 7, 8, 5, 4, 2, 1]
partition(list, 0, 8)
// console.log(list)