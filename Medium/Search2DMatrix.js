// One binary search
// treat matrix as one increaings array broken
// up at each row
var searchMatrix = function (matrix, target) {
    let low = 0;
    let high = matrix.length * matrix[0].length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = Math.floor(mid / matrix[0].length)
        let col = mid % matrix[0].length;
        if (matrix[row][col] === target) return true;
        if (matrix[row][col] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;
}

/* two binary searches
// I don't like this solution
var searchMatrix = function (matrix, target) {
    let low = 0;
    let high = matrix.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (matrix[mid][0] === target) return true;
        if (matrix[mid][0] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    const ROW = low - 1 < 0 ? 0 : low - 1;
    low = 0;
    high = matrix[0].length;
    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (matrix[ROW][mid] === target) return true;
        if (matrix[ROW][mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    const COL = low - 1 < 0 ? 0 : low - 1;
    return matrix[ROW][COL] === target
}
*/

/* from Search 2D Matrix 2
var searchMatrix = function(matrix, target) {
    let row = matrix.length - 1;
    let col = 0;
    
    while (row > 0 && matrix[row][col] > target) row--;
    
    while (col < matrix[0].length - 1 && matrix[row][col] < target) col++
    
    return matrix[row][col] === target
};
*/

const matrix = [[1]]
console.log(searchMatrix(matrix, 1))