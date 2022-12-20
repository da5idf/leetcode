var canVisitAllRooms = function (rooms) {
    const visited = new Set().add(0);
    const queue = [0];

    while (queue.length) {
        const keys = rooms[queue.shift()];
        for (const key of keys) {
            if (!visited.has(key)) {
                visited.add(key);
                queue.push(key);
            }
        }
        if (visited.size === rooms.length) return true;
    }

    return false;
};