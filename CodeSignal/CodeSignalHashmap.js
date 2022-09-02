class HashMap {
    constructor() {
        this.map = {};
        this.cKey = 0;
        this.cValue = 0;
    }

    insert(x, y) {
        this.map[parseInt(x) - this.cKey] = y - this.cValue;
    }

    get(x) {
        if (this.map[parseInt(x) - this.cKey]) {
            return this.map[parseInt(x) - this.cKey] + this.cValue;
        } else return undefined
    }

    addToKey(n) {
        this.cKey += n;
    }

    addToValue(n) {
        this.cValue += n;
    }
}

function testHashMap(queryTypes, queries) {
    let sumOfGet = 0;
    const map = new HashMap();
    for (let i = 0; i < queryTypes.length; i++) {
        const args = queries[i];
        const queryType = queryTypes[i];

        switch (queryType) {
            case 'get':
                const res = map.get(args[0]);
                if (res !== undefined && res > 0) {
                    sumOfGet += res;
                }
                break;
            case 'insert':
                map.insert(args[0], args[1]);
                break;
            case 'addToKey':
                map.addToKey(args[0]);
                break;
            case 'addToValue':
                map.addToValue(args[0]);
                break;
        }
    }


    return sumOfGet;
}

// console.log(testHashMap(["insert", "insert", "addToValue", "addToKey", "get"], [[1, 2], [2, 3], [2], [1], [3]]));
console.log(testHashMap(["insert", "addToValue", "get", "insert", "addToKey", "addToValue", "get"], [[1, -20], [2], [1], [2, 3], [1], [-1], [3]]));