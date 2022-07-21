var floodFill = function (image, sr, sc, color) {

    let stack = [[sr, sc]];
    let target = image[sr][sc];
    let visited = new Set();

    while (stack.length) {
        let current = stack.pop();
        visited.add(`${current[0]},${current[1]}`)
        image[current[0]][current[1]] = color;
        let neighbors = getNeighbors(current, target, image);
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.has(`${neighbors[i][0]},${neighbors[i][1]}`)) stack.push(neighbors[i])
        }
    }

    return image;
};

var getNeighbors = function (current, target, image) {
    let cr = current[0];
    let cc = current[1];
    let neighbors = []

    if (image[cr][cc + 1] === target) neighbors.push([cr, cc + 1])
    if (image[cr][cc - 1] === target) neighbors.push([cr, cc - 1])
    if (cr + 1 < image.length && image[cr + 1][cc] === target) neighbors.push([cr + 1, cc])
    if (cr - 1 >= 0 && image[cr - 1][cc] === target) neighbors.push([cr - 1, cc])

    return neighbors;
}

let image = [[0, 0, 0], [0, 0, 0]]
let sr = 0
let sc = 0
let color = 0

console.log(floodFill(image, sr, sc, color));