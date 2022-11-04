var minMutation = function (startGene, endGene, bank) {
    let seen = new Set();
    let queue = [startGene];
    let mutationCount = 0;
    while (queue.length) {
        const curLen = queue.length;
        for (let i = 0; i < curLen; i++) {
            const curr = queue.shift();
            if (curr === endGene) return mutationCount;
            seen.add(curr);
            for (const gene of bank) {
                if (validMutation(curr, gene) && !seen.has(gene)) queue.push(gene);
            }
        }
        mutationCount++;
    }

    return -1;
};

var validMutation = function (gene1, gene2) {
    let diffCount = 0;
    for (let i = 0; i < 8; i++) {
        if (gene1[i] !== gene2[i]) diffCount++
    }

    return diffCount === 1;
}