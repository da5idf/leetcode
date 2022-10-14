const s = "abcacdb"

const o = "abcabcd"

const sMap = {}
const oMap = {}

for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = sMap[s[i]] + 1 || 1
    oMap[o[i]] = oMap[o[i]] + 1 || 1
}
console.log(oMap);
console.log(sMap);

for (const key in sMap) {
    oMap[key] -= sMap[key]
}


console.log(oMap);