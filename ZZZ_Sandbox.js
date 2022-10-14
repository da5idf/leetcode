const s = "eyunyjremkzgblsfsrtmomdydeshldqxmwikjtfnupbcwhfcipzvuciehpelkmtnuttectqzeaeswritrfrrchkuqswcgsuoshkxvthzjjcxfgtcezgxblhkdgubhempnaoossyypewihccbzbkdjjxbqvnzqycdlwmrjjfykuitkzfhchuambdagictmjatwnttpcenraowhzmlgfvxcyamfonupldrrnvnebtzqxdjongapktgmiytqiqseizonpitnknfzwuendmvxhbsobidnqwhplolahpijafzjistxtnfdcxxkrruxbphmjqzanebmioyqmyqwayunokwbvmckgpmcxoeqtadafkbxnjvknhmjtlzkiqxirobjcpsikcyhvmoehsompftkxxfkmneqtpjntrcatlwgvgmrrvaraytvhpbidajyqolnzqchxwvpdvchgfnhohypbkzohgdchxspsylhxaefbpzaomwgxghpniy"

const o = "hthththththththththththththththththththththththththththncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvluncmpkxaeiobjyzfqrdgswvncmpkxaeiobjyzfqrdgswncmpkxaeiobjyzfqrdgsncmpkxaeiobjyzfqrncmpkxaeiobjyzncmpkxaeiobncmpkxaeioncmpkxncmpncmncmnn"

const sMap = {}
const oMap = {}
for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = sMap[s[i]] + 1 || 1
    oMap[o[i]] = oMap[o[i]] + 1 || 1
}

for (const key in sMap) {
    oMap[key] -= sMap[key]
}


console.log(oMap);