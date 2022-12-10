var addTwoNumbers = function (l1, l2) {
    l1 = reverse(l1)
    l2 = reverse(l2)

    const sumList = sumLists(l1, l2);
    return reverse(sumList);
};

const reverse = node => {
    let next = node.next;
    node.next = null;
    while (next) {
        let temp = next.next;
        next.next = node;
        node = next;
        next = temp;
    }
    return node
}

const sumLists = (l1, l2) => {
    let carry = 0;
    let node = new ListNode();
    const dummy = node;
    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let nextNodeVal = (val1 + val2 + carry) % 10;
        carry = Math.floor((val1 + val2 + carry) / 10);
        node.next = new ListNode(nextNodeVal);
        node = node.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}