/*
My solution was a poor implementation of a Disjoint Set Union solution.
This is a more complete solution with a DUS class.
The main trick here is that there are dummy 'nodes' that represent the 
Left and Right borders of the grid. If there is ever a path from Left to Right
then that means water connects Left and Right and we found our solution.

Without Left and Right dummy nodes we would have to check if any cell in
the first column is connected to any cell in the last column.
*/
class DSU {
    constructor(n) {
        this.root = new Array(n)
        for (let i = 0; i < n; i++) this.root[i] = i
        this.size = new Array(n).fill(1);
    }

    find(x) {
        if (this.root[x] !== x) {
            this.root[x] = this.find(this.root[x])
        }
        return this.root[x]
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        // return if roots are already in same set
        if (rootX === rootY) return

        // Make rootX the root with smaller size
        if (this.size[rootX] > this.size[rootY]) {
            const temp = rootX;
            rootX = rootY;
            rootY = temp;
        }
        // merge the smaller group into the larger one
        // by changing smaller root's (rootX) root to rootY
        // and by adding the size of rootX's set to rootY's
        this.root[rootX] = rootY;
        this.size[rootY] += this.size[rootX];
    }
}

var latestDayToCross = function (rows, cols, cells) {
    const dsu = new DSU(rows * cols + 2);
    const grid = new Array(rows).fill().map(() => new Array(cols).fill(0));

    for (let i = 0; i < cells.length; i++) {
        const row = cells[i][0] - 1 // cells are 1-indexed
        const col = cells[i][1] - 1
        grid[row][col] = 1; // make this cell water
        const index1 = row * cols + col + 1 // this is the cell's idx in the DSU
        findWaterBoundary(index1, dsu, row, col, rows, cols, grid);

        // This is to join the Left border with 
        // all cells in the first column of grid
        if (col === 0) {
            dsu.union(0, index1);
        }

        // This is to join the Right border with 
        // all cells in the last column of grid
        if (col === cols - 1) {
            dsu.union(rows * cols + 1, index1)
        }

        // if the Left and Right border are in the same set,
        // all columns are occupied by water and we can't pass
        if (dsu.find(0) === dsu.find(rows * cols + 1)) {
            return i
        }
    }

    return -1
};

function findWaterBoundary(index1, dsu, row, col, rows, cols, grid) {
    const dirs = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]]
    for (const [dr, dc] of dirs) {
        const [r, c] = [dr + row, dc + col];
        const index2 = r * cols + c + 1
        if (r < 0 || c < 0) continue;
        if (r >= rows || c >= cols) continue;
        if (grid[r][c] !== 1) continue;

        dsu.union(index1, index2);
    }
}

/*
This is my first solution that utilizes disjoint union sets on water cells.
The key is recognizing that if any set contains every column, we can't cross.
*/
var latestDayToCross = function (rows, cols, cells) {
    const groups = [] // list of groups
    for (let i = 0; i < cells.length; i++) {
        const [row, col] = cells[i];
        if (solve(groups, row, col, rows, cols)) return i
    }
};

function solve(groups, row, col, rows, cols) {
    const key = `${row},${col}`
    let foundGroups = []
    for (let i = 0; i < groups.length; i++) {
        if (groups[i].boundary.has(key)) foundGroups.push(groups[i]);
    }

    if (foundGroups.length > 0) {
        mergeGroups(foundGroups)
        foundGroups[0].set.add(key);
        foundGroups[0].cols.add(col);
        if (foundGroups[0].cols.size === cols) return true;
        foundGroups[0].boundary.delete(key);
        addBoundaries(foundGroups[0].boundary, row, col, rows, cols)
    } else {
        groups.push({
            set: new Set().add(key),
            cols: new Set().add(col),
            boundary: addBoundaries(new Set(), row, col, rows, cols)
        })
    }
    col

    return false;
}

function mergeGroups(groups) {
    const mergeSet = groups[0].set
    const mergeCols = groups[0].cols
    const mergeBoundary = groups[0].boundary
    for (let i = 1; i < groups.length; i++) {
        mergeSets(mergeSet, groups[i].set)
        mergeSets(mergeCols, groups[i].cols)
        mergeSets(mergeBoundary, groups[i].boundary)
    }
}

function mergeSets(set1, set2) {
    set2.forEach(val => {
        set1.add(val);
    })
}

function addBoundaries(set, row, col, rows, cols) {
    const dirs = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]]
    for (const [dr, dc] of dirs) {
        const [r, c] = [dr + row, dc + col];
        if (r < 1 || c < 1) continue;
        if (r > rows || c > cols) continue;
        if (set.has(`${r},${c}`)) continue;
        set.add(`${r},${c}`);
    }

    return set
}