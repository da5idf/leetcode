var canConstruct = function (ransomNote, magazine) {

    if (ransomNote.length > magazine.length) return false

    let arr = new Array(26).fill(0);

    for (let i = 0; i < ransomNote.length; i++) {
        arr[ransomNote.charCodeAt(i) - 97]--;
    }

    for (let i = 0; i < magazine.length; i++) {
        arr[magazine.charCodeAt(i) - 97]++;
    }

    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) return false;
    }

    return true;
};