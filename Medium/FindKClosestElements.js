var findClosestElements = function (arr, k, target) {
    let startIdx = binarySearch(arr, target);
    let endIdx = startIdx;
    console.log(startIdx)
    while (endIdx - startIdx + 1 < k) {

        if (startIdx === 0) endIdx++;

        else if (endIdx === arr.length - 1) startIdx--;

        else {
            let startDif = Math.abs(target - arr[startIdx - 1]);
            let endDif = Math.abs(target - arr[endIdx + 1]);
            if (startDif <= endDif) {
                startIdx--;
            } else {
                endIdx++
            }
        }
    }

    const closestArray = []
    for (let i = startIdx; i <= endIdx; i++) {
        closestArray.push(arr[i]);
    }

    return closestArray
}

var binarySearch = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((right + left) / 2);

        if (arr[mid] === target) return mid;
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (arr[left] < target && left + 1 < arr.length) {
        let compare = arr[left + 1];
        let leftDif = Math.abs(target - arr[left])
        let compareDif = Math.abs(target - arr[left + 1])

        return leftDif <= compareDif ? left : left + 1
    }
    else if (arr[left] > target && left - 1 >= 0) {
        let compare = arr[left - 1];
        let leftDif = Math.abs(target - arr[left])
        let compareDif = Math.abs(target - arr[left - 1])

        return compareDif <= leftDif ? left - 1 : left
    }

    return left
}