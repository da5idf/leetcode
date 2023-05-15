// clever one pass approach
var swapNodes = function (head, k) {
    let firstNode = head;
    let secondNode = head;
    let cur = head;
    let count = 1;
    while (cur.next) {
        if (count < k) firstNode = firstNode.next;
        else secondNode = secondNode.next;

        cur = cur.next;
        count++;
    }

    let temp = secondNode.val;
    secondNode.val = firstNode.val;
    firstNode.val = temp;

    return head;
}

// my original 2 pass approach
var swapNodes = function (head, k) {

    let count = 1;
    let cur = head;
    while (cur.next) {
        count++;
        cur = cur.next;
    }
    cur = head;

    let first, second;
    const firstIdx = Math.min(k, count - k + 1)
    const secondIdx = firstIdx === k ? count - k + 1 : k
    for (let i = 1; i <= count; i++) {
        if (i === firstIdx) first = cur;
        if (i === secondIdx) second = cur;
        cur = cur.next;
    }
    let temp = second.val;
    second.val = first.val;
    first.val = temp;

    return head;
}